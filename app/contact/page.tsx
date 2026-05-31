"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="logo-text text-5xl mb-3" style={{ color: "#d4a017" }}>
          Get in Touch
        </h1>
        <p className="text-sm" style={{ color: "#a87d52" }}>
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <div className="card p-8 space-y-5">
            <h2 className="text-lg font-semibold" style={{ color: "#7c5c3a" }}>Visit Us</h2>
            <div className="space-y-4 text-sm" style={{ color: "#a87d52" }}>
              <div>
                <p className="font-medium" style={{ color: "#3b2f1e" }}>📍 Address</p>
                <p>142 Maple Street, Brooklyn, NY 11201</p>
              </div>
              <div>
                <p className="font-medium" style={{ color: "#3b2f1e" }}>⏰ Hours</p>
                <p>Tuesday – Sunday</p>
                <p>7:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium" style={{ color: "#3b2f1e" }}>📞 Phone</p>
                <a href="tel:+15551234567" className="hover:underline">(555) 123-4567</a>
              </div>
              <div>
                <p className="font-medium" style={{ color: "#3b2f1e" }}>✉ Email</p>
                <a href="mailto:hello@bruleebakery.com" className="hover:underline">
                  hello@bruleebakery.com
                </a>
              </div>
              <div>
                <p className="font-medium" style={{ color: "#3b2f1e" }}>📸 Instagram</p>
                <a href="#" className="hover:underline">@bruleebakery</a>
              </div>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div>
          {sent ? (
            <div className="card p-10 text-center">
              <span className="text-5xl block mb-5">💌</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#7c5c3a" }}>
                Message Sent!
              </h3>
              <p className="text-sm" style={{ color: "#a87d52" }}>
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 space-y-5">
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#7c5c3a" }}>
                Send a Message
              </h2>
              <div>
                <label>Your Name</label>
                <input type="text" placeholder="Jane Doe" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="jane@email.com" required />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" placeholder="Custom cake inquiry, feedback..." required />
              </div>
              <div>
                <label>Message</label>
                <textarea rows={5} placeholder="Write your message here..." required />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
