"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const cart = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-10 bg-surface/95 backdrop-blur-xl border-b border-navy/5 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_20px_rgba(27,38,59,0.06)]" : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-5 md:px-8 py-4 md:py-5">
          <div className="flex items-center gap-12">
            <Link href="/" aria-label="TITAN Performance Home">
              <Image
                src="/assets/logo.png"
                alt="TITAN Performance"
                width={146}
                height={36}
                className="h-[34px] w-auto"
                priority
              />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-8 list-none">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative font-heading font-bold text-xs tracking-[0.1em] uppercase pb-1 transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-navy after:origin-left after:transition-transform after:duration-300 after:ease-out ${
                        pathname === link.href
                          ? "text-navy after:scale-x-100"
                          : "text-steel hover:text-navy after:scale-x-0 hover:after:scale-x-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={cart.open}
              className="relative w-10 h-10 flex items-center justify-center text-navy hover:opacity-70 transition-opacity"
              aria-label="Open cart"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {cart.count > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-navy text-white text-[9px] font-extrabold flex items-center justify-center animate-scale-in">
                  {cart.count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden flex-col gap-[5px] w-6 py-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 bg-navy transition-all duration-300 ease-out ${
                  menuOpen
                    ? "rotate-45 translate-y-[7px]"
                    : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-navy transition-all duration-300 ease-out ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-navy transition-all duration-300 ease-out ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[7px]"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-surface flex flex-col pt-24 px-8 pb-8 transition-all duration-500 ease-out ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-6 list-none">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={`font-heading font-black text-[2.5rem] uppercase tracking-tight text-navy transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : "0ms" }}
            >
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-navy text-white text-center font-heading font-bold uppercase tracking-[0.15em] text-xs py-5"
          >
            Shop the System
          </Link>
        </div>
      </div>
    </>
  );
}
