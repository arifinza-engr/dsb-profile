"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY_NAME, COMPANY_LOGO, NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="container-maritime">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={COMPANY_LOGO}
              alt={`${COMPANY_NAME} Logo`}
              width={32}
              height={32}
              className="rounded-lg object-cover"
              priority
            />
            <span className="font-bold text-lg text-foreground">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <div key={item.href} className="relative">
                {item.submenu && item.submenu.length > 0 ? (
                  <div>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.name ? null : item.name
                        )
                      }
                      className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
              <div key={item.href}>
                {item.submenu && item.submenu.length > 0 ? (
                  <div>
                    <div className="px-4 py-2 text-foreground font-medium">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
