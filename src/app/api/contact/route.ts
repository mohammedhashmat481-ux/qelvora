import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schema";
import nodemailer from "nodemailer";

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4; // Max 4 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction and rate check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();

    // 3. Honeypot check (anti-bot)
    if (body.websiteHp && String(body.websiteHp).trim().length > 0) {
      // Silently return success to mislead the bot
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received. Our team will contact you shortly.",
      });
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the highlighted fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, phone, email, organisationType, productInterest, message } =
      validationResult.data;

    // 5. Send email via Nodemailer if SMTP configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactReceiver =
      process.env.CONTACT_EMAIL_TO || "qelvora.in@gmail.com";

    const emailSubject = `[Qelvora Web Inquiry] ${name} (${organisationType}${
      productInterest ? ` - ${productInterest}` : ""
    })`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #121212; border-bottom: 2px solid #C49A2C; padding-bottom: 10px;">New Inquiry from Qelvora.in</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Organisation Type:</strong> ${organisationType}</p>
        ${productInterest ? `<p><strong>Product Interest:</strong> ${productInterest}</p>` : ""}
        <div style="margin-top: 15px; padding: 15px; background: #f9f9f9; border-left: 3px solid #C49A2C;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin: 5px 0 0 0;">${message}</p>
        </div>
        <p style="font-size: 11px; color: #888; margin-top: 25px;">
          Received from IP: ${ip} on ${new Date().toISOString()} via qelvora.in contact API
        </p>
      </div>
    `;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Qelvora Web Lead" <${smtpUser}>`,
        to: contactReceiver,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nOrganisation: ${organisationType}\nInterest: ${productInterest || "General"}\nMessage:\n${message}`,
      });
    } else {
      // In development or when SMTP is not yet populated
      console.log(
        "[Qelvora Contact API] SMTP credentials not set in .env. Logging inquiry locally:\n",
        { name, phone, email, organisationType, productInterest, message, ip }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! We have received your requirement. A senior engineer will call or WhatsApp you within 1 business day.",
    });
  } catch (err: unknown) {
    console.error("[Qelvora Contact API Error]", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message. Please call or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
