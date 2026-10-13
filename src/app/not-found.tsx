import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Section variant="shade" spacing="hero" className="min-h-[70vh] flex items-center">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold-light font-mono">
            404 Error — Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            We couldn&apos;t find that page
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto leading-relaxed">
            The link you followed may be incorrect, or the page may have been moved. You can return to our homepage or explore our software platforms below.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Back to home</span>
            </Button>
            <Button href="/contact" variant="gold-outline" size="md">
              Contact us
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs text-neutral-400 flex flex-wrap justify-center gap-6">
            <Link href="/products/crm" className="hover:text-gold-light">
              Qelvora CRM
            </Link>
            <Link href="/products/school-erp" className="hover:text-gold-light">
              School ERP
            </Link>
            <Link href="/products/college-erp" className="hover:text-gold-light">
              College ERP
            </Link>
            <Link href="/services" className="hover:text-gold-light">
              IT Services
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
