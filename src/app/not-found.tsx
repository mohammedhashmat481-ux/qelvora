import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Qelvora Technologies",
};

export default function NotFound() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="text-8xl font-light text-zinc-200 leading-none select-none">
          404
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-light text-zinc-950">
            Page not found
          </h1>
          <p className="text-zinc-600 text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been
            moved. Try going back to the home page.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-50 text-sm font-medium transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
