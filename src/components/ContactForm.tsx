"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-light rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-navy mb-2">
          Thank you for reaching out
        </h3>
        <p className="text-graphite text-sm">
          We have received your message and will respond within two business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-graphite mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-graphite mb-1.5"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
            placeholder="Company name"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-graphite mb-1.5"
        >
          Business Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-graphite mb-1.5"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
          placeholder="Tell us about your project or challenge"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-navy text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-navy-light transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
