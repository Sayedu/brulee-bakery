import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{ background: "#fffbf0", borderTop: "1px solid #fde68a" }}
      className="py-8 mt-16"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#a87d52" }}>
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Brûlée Bakery" width={40} height={40} />
          <span className="logo-text text-xl" style={{ color: "#7a5c00" }}>
            Brûlée Bakery
          </span>
        </div>
        <p>© {new Date().getFullYear()} Brûlée Bakery. Made with love &amp; butter.</p>
        <div className="flex gap-6">
          <a href="tel:+15551234567" className="hover:underline">📞 (555) 123-4567</a>
          <a href="mailto:hello@bruleebakery.com" className="hover:underline">✉ hello@bruleebakery.com</a>
        </div>
      </div>
    </footer>
  );
}
