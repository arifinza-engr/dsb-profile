"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, COMPANY_LOGO, NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="container-maritime">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={COMPANY_LOGO}
              alt={`${COMPANY_NAME} Logo`}
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 dark:border-slate-700">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
