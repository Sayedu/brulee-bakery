"use client";

import { useEffect, useState, useRef } from "react";

const reviews = [
  {
    name: "Sofia R.",
    avatar: "S",
    text: "This banana pudding is unreal. The custard is so smooth and the fresh bananas make all the difference. I order every week.",
  },
  {
    name: "James T.",
    avatar: "J",
    text: "Best banana pudding I've ever had — and I've had a lot. The wafer layers are perfectly soft without being mushy.",
  },
  {
    name: "Priya M.",
    avatar: "P",
    text: "Got the party tray for my daughter's birthday. It was gone in minutes. Everyone kept asking where it was from!",
  },
  {
    name: "Leo K.",
    avatar: "L",
    text: "I drive 45 minutes just for this pudding. Worth every mile. The whipped cream on top is the perfect finish.",
  },
  {
    name: "Amara W.",
    avatar: "A",
    text: "Ordered the half dozen for my office and my coworkers literally cheered. Already planning my next order.",
  },
  {
    name: "Nathan G.",
    avatar: "N",
    text: "Simple, perfect, nostalgic. It tastes exactly like something your grandma would make — but even better.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#d4a017">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(index: number, dir: "next" | "prev") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 320);
  }

  function next() {
    goTo((current + 1) % reviews.length, "next");
  }

  function prev() {
    goTo((current - 1 + reviews.length) % reviews.length, "prev");
  }

  useEffect(() => {
    timerRef.current = setTimeout(next, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, animating]);

  const review = reviews[current];

  const slideStyle: React.CSSProperties = {
    transition: animating ? "opacity 0.32s ease, transform 0.32s ease" : "none",
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "next" ? "24px" : "-24px"})`
      : "translateX(0)",
  };

  return (
    <section className="py-16 px-6" style={{ background: "#fffbf0" }}>
      <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: "#7c5c3a" }}>
        What People Are Saying
      </h2>

      <div className="max-w-2xl mx-auto relative">
        {/* Card */}
        <div className="card p-10 text-center" style={slideStyle}>
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mx-auto mb-4"
            style={{ background: "#d4a017" }}
          >
            {review.avatar}
          </div>

          <Stars />

          <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#5a4030" }}>
            &ldquo;{review.text}&rdquo;
          </p>

          <p className="text-xs font-semibold tracking-wide" style={{ color: "#a87d52" }}>
            — {review.name}
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "#fde68a", color: "#7c5c3a", border: "1px solid #f5c842" }}
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "#fde68a", color: "#7c5c3a", border: "1px solid #f5c842" }}
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-7">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className="w-2 h-2 rounded-full transition-all duration-200"
            style={{
              background: i === current ? "#d4a017" : "#fde68a",
              transform: i === current ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
