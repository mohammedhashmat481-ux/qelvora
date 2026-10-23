import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="text-8xl font-light text-white/10 leading-none select-none">
          404
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-light text-white">
            Page not found
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have been
            moved. Try going back to the home page.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            prefetch={true}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors shadow-lg"
          >
            <Home className="w-4 h-4" />
            Go home
          </Link>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
