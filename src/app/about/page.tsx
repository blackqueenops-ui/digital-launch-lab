import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Digital Launch Lab is a B2B consulting firm helping industrial and technology companies design and launch digital commercial strategies across Europe.",
};

const workWith = [
  "Industrial manufacturers expanding into digital sales",
  "Technology companies entering new European markets",
  "Engineering and supply chain firms building B2B platforms",
  "SME leadership teams planning digital product launches",
  "Commercial directors responsible for online channel development",
];

const solve = [
  "Lack of a clear digital commercial strategy",
  "Uncertainty about digital product-market fit",
  "Disconnected internal processes for digital initiatives",
  "No structured approach to B2B platform development",
  "Difficulty translating offline business models to digital channels",
  "Need for objective, external strategic guidance before investing",
];

const approach = [
  {
    title: "Clarity First",
    desc: "We start every engagement by clarifying the business objective. If the objective is not clear, the strategy cannot be sound.",
  },
  {
    title: "Structured Methodology",
    desc: "Our process follows a defined sequence — assessment, strategy, planning, and advisory support — with documented deliverables at each stage.",
  },
  {
    title: "Commercial Grounding",
    desc: "Everything we recommend is tied to commercial outcomes. We do not produce strategies that cannot be executed or measured.",
  },
  {
    title: "Sector Focus",
    desc: "We work exclusively with B2B and industrial companies. This focus allows us to understand the operational realities and constraints of our clients.",
  },
  {
    title: "Execution Readiness",
    desc: "Our deliverables are designed to be acted upon — by internal teams, development partners, or implementation agencies. We bridge the gap between strategy and execution.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Focused B2B Advisory for Digital Commercial Growth
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Digital Launch Lab is a consulting practice dedicated to helping
              industrial and technology-focused companies design, plan, and
              prepare digital commercial strategies. We work with businesses
              across Europe that need structured guidance to enter or expand
              their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Our Clients
              </p>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Who We Work With
              </h2>
              <p className="text-graphite leading-relaxed mb-8">
                Our clients are typically mid-sized industrial or technology
                companies — often with strong offline operations but limited
                digital commercial infrastructure. They come to us when they
                need an experienced external perspective to shape their digital
                strategy.
              </p>
              <div className="space-y-4">
                {workWith.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-graphite">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional team discussion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Help Solve */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Help Solve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industrial and technology companies face specific challenges when
              moving into digital commercial operations. These are the problems
              we address.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solve.map((item) => (
              <div
                key={item}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="text-sm text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              How We Operate
            </p>
            <h2 className="text-3xl font-bold text-navy">
              Our Working Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((item, i) => (
              <div
                key={item.title}
                className={`bg-light rounded-xl p-8 border-t-4 border-navy ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold text-navy mb-4">
              Legal Information
            </h3>
            <p className="text-sm text-graphite leading-relaxed mb-3">
              Digital Launch Lab is a trading name operated by{" "}
              <strong>SIA AB Market &amp; Trade</strong>, a limited liability
              company registered in Latvia.
            </p>
            <div className="text-sm text-muted space-y-1">
              <p>Registration No. 40203580147</p>
              <p>Ausekļa iela 3–83, Rīga, LV-1010, Latvia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564613655919-3b475e66f0ae?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Have a Digital Growth Initiative in Mind?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            We are happy to discuss how our consulting services can support your
            business objectives. Reach out for an initial conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-navy font-medium px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
          >
            Get in Touch
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
