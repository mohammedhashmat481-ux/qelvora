import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="text-8xl font-light text-[#F8F6F0]/10 leading-none select-none">
          404
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">
            Page not found
          </h1>
          <p className="text-[#B8B8B8] text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been
            moved. Try going back to the home page.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            prefetch={true}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] border border-[#454545] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
