import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Lightbulb,
  Globe,
  BarChart3,
  Settings,
  Target,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "B2B consulting services including market research, digital product strategy, website concept development, distribution strategy, and commercial launch advisory.",
};

const services = [
  {
    icon: Search,
    title: "Market Research",
    description:
      "We conduct structured market research tailored to industrial and technology sectors. This includes competitive analysis, customer segmentation, digital demand mapping, and identification of addressable market opportunities within European B2B markets.",
    outcome:
      "A clear picture of your digital market position, competitor benchmarks, and a prioritised list of opportunities for digital engagement.",
    audience:
      "Companies entering new markets, launching new product lines, or evaluating digital channel viability.",
  },
  {
    icon: Lightbulb,
    title: "Digital Product Strategy",
    description:
      "We help you define what your digital product or service should look like — from value proposition design to feature prioritisation and technical requirement framing. Our focus is on building digital offerings that align with your existing business model and operational strengths.",
    outcome:
      "A documented product strategy with defined scope, target users, value proposition, and a feature roadmap aligned to commercial goals.",
    audience:
      "Product teams, commercial directors, and founders planning to digitise or extend their product portfolio.",
  },
  {
    icon: Globe,
    title: "B2B Website Concept Development",
    description:
      "We develop the strategic concept for your B2B website or platform — structure, user journeys, content strategy, and lead generation mechanics. This is not design or development; it is the strategic foundation that ensures your digital presence serves your commercial objectives.",
    outcome:
      "A complete website concept brief including sitemap, page-level requirements, content strategy, and conversion architecture.",
    audience:
      "Companies building or rebuilding their B2B web presence to support sales, lead generation, or product presentation.",
  },
  {
    icon: BarChart3,
    title: "Online Distribution Strategy",
    description:
      "We design the digital distribution architecture for your products — identifying the right channels, platforms, and partnership models. This includes marketplace assessment, direct-to-buyer channel design, and hybrid distribution planning.",
    outcome:
      "A distribution strategy document outlining recommended channels, partner requirements, pricing considerations, and go-to-market sequencing.",
    audience:
      "Manufacturers, suppliers, and technology companies seeking to sell through digital channels across European markets.",
  },
  {
    icon: Settings,
    title: "Business Model Structuring",
    description:
      "We help you structure the commercial model behind your digital initiative. This includes revenue model design, pricing strategy, cost analysis, unit economics, and operational planning to ensure your digital business is financially sound.",
    outcome:
      "A structured business model canvas with revenue projections, pricing frameworks, and an operational plan for digital commercial activities.",
    audience:
      "Leadership teams and founders preparing to invest in digital channels and needing commercial clarity before execution.",
  },
  {
    icon: Target,
    title: "Commercial Launch Advisory",
    description:
      "We provide hands-on advisory support during the preparation and execution of your digital commercial launch. This includes launch planning, milestone tracking, stakeholder alignment, and tactical decision support throughout the process.",
    outcome:
      "A managed launch process with clear milestones, risk mitigation, and advisory support to ensure commercial readiness.",
    audience:
      "Companies in the execution phase of a digital product launch, platform rollout, or market entry initiative.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero with background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Strategic Consulting for B2B Digital Growth
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We offer a focused set of consulting services designed to help
              industrial and technology companies plan, structure, and launch
              digital commercial operations with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                  i < services.length - 1
                    ? "pb-20 border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="lg:col-span-1">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center">
                    <svc.icon size={26} className="text-white" />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    {svc.title}
                  </h2>
                  <p className="text-graphite leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-light rounded-xl p-6 border-l-4 border-accent">
                    <h4 className="text-sm font-semibold text-navy mb-2">
                      Expected Outcome
                    </h4>
                    <p className="text-sm text-graphite leading-relaxed">
                      {svc.outcome}
                    </p>
                  </div>
                  <div className="bg-light rounded-xl p-6 border-l-4 border-navy">
                    <h4 className="text-sm font-semibold text-navy mb-2">
                      Who This Is For
                    </h4>
                    <p className="text-sm text-graphite leading-relaxed">
                      {svc.audience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Let&apos;s Discuss Your Digital Strategy
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Every engagement starts with a conversation. Tell us about your
            business objectives and we will outline how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-navy font-medium px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
          >
            Book a Consultation
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
