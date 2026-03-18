"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav({ fixed = false }) {
  const pathname = usePathname();

  return (
    <header className={fixed ? "fixed left-0 right-0 top-0 z-50" : "relative z-40"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-sm uppercase tracking-[0.24em] text-white/72 sm:px-8 lg:px-10">
        <Link href="/" className="text-white">
          Split Brain Creative
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${active ? "text-white" : "text-white/62 hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
