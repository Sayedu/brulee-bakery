"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/basePath";

const links = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      style={{ background: "#fffbf0", borderBottom: "1px solid #fde68a" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            style={{
              borderRadius: "50%",
              border: "2px solid #c9a227",
              boxShadow: "0 2px 12px rgba(201,162,39,0.35)",
              lineHeight: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo.svg")} alt="Brûlée Bakery" width={64} height={64} />
          </div>
          <span className="logo-text text-2xl" style={{ color: "#7a5c00" }}>
            Brûlée Bakery
          </span>
        </Link>

        <nav className="flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm tracking-wide font-medium ${
                pathname === href ? "active" : ""
              }`}
              style={{ color: pathname === href ? "#c9a227" : "#7c5c3a" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
