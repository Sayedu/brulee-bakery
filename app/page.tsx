import Link from "next/link";
import Image from "next/image";
import ReviewCarousel from "@/components/ReviewCarousel";

const tiers = [
  { qty: "1 – 10 cups", price: "$5 each", highlight: false },
  { qty: "11+ cups", price: "$5 each  ·  $5 off", highlight: true },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="text-center pt-8 pb-24 px-6"
        style={{ background: "linear-gradient(to bottom, #fef9e7, #fffbf0)" }}
      >
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Brûlée Bakery" width={240} height={240} priority />
        </div>
        <h1
          className="logo-text mb-4"
          style={{ fontSize: "4.5rem", color: "#d4a017", lineHeight: 1.1 }}
        >
          Banana Pudding
        </h1>
        <p className="text-lg mb-2" style={{ color: "#7c5c3a" }}>
          Creamy, dreamy & made fresh every day.
        </p>
        <p className="text-sm mb-10" style={{ color: "#a87d52" }}>
          Brooklyn, NY &middot; Available Tue–Sun, 7am–6pm
        </p>
        <a
          href="https://ig.me/m/bruleebakery"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Order on Instagram
        </a>
      </section>

      <hr className="section-divider" />

      {/* Menu / Pricing */}
      <section className="min-h-0 flex items-center justify-center px-6 py-12">
        <div
          className="w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
          style={{ border: "1px solid #fde68a", background: "#fffbf0" }}
        >
          {/* Photo */}
          <div className="md:w-1/2 relative" style={{ minHeight: "420px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/pudding.jpg`}
              alt="Banana Pudding"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Pricing */}
          <div className="md:w-1/2 flex flex-col justify-center px-10 py-12">
            <h2 className="logo-text text-4xl mb-1" style={{ color: "#d4a017" }}>
              Banana Pudding
            </h2>
            <p className="text-sm mb-8" style={{ color: "#a87d52" }}>
              8 oz cup &middot; Fresh banana, vanilla custard &amp; wafers
            </p>

            <div className="space-y-2 mb-10">
              {tiers.map(({ qty, price, highlight }) => (
                <div
                  key={qty}
                  className="flex items-center justify-between px-5 py-3 rounded-xl"
                  style={{
                    background: highlight ? "#fde68a" : "#fef9e7",
                    border: `1px solid ${highlight ? "#d4a017" : "#fde68a"}`,
                  }}
                >
                  <span className="text-sm" style={{ color: "#3b2f1e" }}>{qty}</span>
                  <span className="text-sm font-semibold" style={{ color: highlight ? "#b8861a" : "#d4a017" }}>
                    {price}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://ig.me/m/bruleebakery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center inline-flex items-center justify-center gap-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Order on Instagram
            </a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* About blurb */}
      <section className="max-w-xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7c5c3a" }}>
          One Thing. Done Right.
        </h2>
        <p className="leading-relaxed text-sm" style={{ color: "#a87d52" }}>
          We put everything into one dessert — our banana pudding. Layers of fresh banana,
          homemade vanilla custard, and classic wafers. Simple, comforting, unforgettable.
        </p>
        <a
          href="https://ig.me/m/bruleebakery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 btn-primary"
        >
          Order on Instagram
        </a>
      </section>

      <hr className="section-divider" />

      <ReviewCarousel />
    </div>
  );
}
