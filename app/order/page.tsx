import Image from "next/image";

const IG_HANDLE = "bruleebakery";
const IG_DM_URL = `https://ig.me/m/${IG_HANDLE}`;

const steps = [
  { n: "1", text: "Tap the button below to open our Instagram DM." },
  { n: "2", text: "Tell us how many cups you'd like & your pickup date." },
  { n: "3", text: "We'll confirm your order and have it fresh and ready." },
];

export default function OrderPage() {
  return (
    <div className="max-w-lg mx-auto px-6 py-20 text-center">
      <div className="flex justify-center mb-6">
        <Image src="/logo.svg" alt="Brûlée Bakery" width={100} height={100} />
      </div>

      <h1 className="logo-text text-5xl mb-3" style={{ color: "#d4a017" }}>
        Place an Order
      </h1>
      <p className="text-sm mb-12" style={{ color: "#a87d52" }}>
        Orders are placed through Instagram DM — it&apos;s quick and easy.
      </p>

      {/* Steps */}
      <div className="card p-8 mb-10 text-left space-y-5">
        {steps.map(({ n, text }) => (
          <div key={n} className="flex items-start gap-4">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
              style={{ background: "#fde68a", color: "#7a5c00" }}
            >
              {n}
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "#3b2f1e" }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Pricing reminder */}
      <div
        className="rounded-xl px-6 py-4 mb-10 flex justify-between text-sm"
        style={{ background: "#fef9e7", border: "1px solid #fde68a" }}
      >
        <span style={{ color: "#3b2f1e" }}>1 – 10 cups</span>
        <span className="font-semibold" style={{ color: "#d4a017" }}>$5 each</span>
      </div>
      <div
        className="rounded-xl px-6 py-4 mb-10 flex justify-between text-sm"
        style={{ background: "#fde68a", border: "1px solid #d4a017" }}
      >
        <span style={{ color: "#3b2f1e" }}>11+ cups</span>
        <span className="font-semibold" style={{ color: "#b8861a" }}>$5 each · $5 off</span>
      </div>

      <a
        href={IG_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center gap-2 text-base"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        DM us on Instagram
      </a>

      <p className="text-xs mt-5" style={{ color: "#a87d52" }}>@{IG_HANDLE}</p>
    </div>
  );
}
