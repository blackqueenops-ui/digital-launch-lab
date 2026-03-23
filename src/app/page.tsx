import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Lightbulb,
  Globe,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Target,
  Layers,
  Building2,
  Cpu,
  Factory,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Market Research",
    desc: "Data-driven analysis of digital market opportunities, competitive landscapes, and customer segments for industrial sectors.",
  },
  {
    icon: Lightbulb,
    title: "Digital Product Strategy",
    desc: "Structured frameworks for defining digital products and services aligned with your business model and market position.",
  },
  {
    icon: Globe,
    title: "B2B Website Concept Development",
    desc: "Strategic planning for B2B web platforms that support lead generation, product presentation, and client engagement.",
  },
  {
    icon: BarChart3,
    title: "Online Distribution Strategy",
    desc: "Channel architecture and partner strategies for selling industrial and technology products through digital channels.",
  },
  {
    icon: Settings,
    title: "Business Model Structuring",
    desc: "Commercial model design for digital operations, including pricing, revenue streams, and go-to-market planning.",
  },
  {
    icon: Target,
    title: "Commercial Launch Advisory",
    desc: "End-to-end guidance on preparing and executing digital commercial launches for B2B markets.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "We analyse your current position, market environment, and digital readiness to identify the highest-impact opportunities.",
  },
  {
    num: "02",
    title: "Strategy & Concept Design",
    desc: "We develop a structured digital strategy with clear commercial logic, target segments, and platform requirements.",
  },
  {
    num: "03",
    title: "Planning & Specification",
    desc: "We deliver actionable plans, technical specifications, and implementation roadmaps ready for execution.",
  },
  {
    num: "04",
    title: "Launch Support & Advisory",
    desc: "We provide ongoing advisory support during execution to ensure strategic alignment and commercial viability.",
  },
];

const industries = [
  { icon: Factory, label: "Industrial Manufacturing" },
  { icon: Cpu, label: "Technology & Electronics" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: Building2, label: "Engineering Services" },
  { icon: Layers, label: "Building Materials" },
  { icon: Settings, label: "Equipment & Machinery" },
];

const reasons = [
  "Focused exclusively on B2B and industrial sectors",
  "Structured methodology with clear deliverables",
  "European market expertise and cross-border perspective",
  "Commercially grounded — strategy tied to revenue outcomes",
  "Hands-on advisory, not theoretical consulting",
  "Scalable engagement models from single projects to ongoing support",
];

export default function HomePage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              B2B Digital Consulting
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
              Digital Strategy for Industrial and B2B Growth
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We help industrial and technology-focused businesses design digital
              products, build B2B sales channels, and structure online commercial
              strategies across Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-navy font-medium px-7 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
              >
                Book a Consultation
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                B2B Digital Consulting
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                Bridging Industrial Expertise and Digital Opportunity
              </h2>
              <p className="text-graphite text-lg leading-relaxed">
                Many industrial and technology companies know they need a digital
                commercial presence but lack the internal frameworks to build one
                effectively. We provide the strategic clarity and structured planning
                to make digital launches commercially viable.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data analytics and digital strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5">
                  <svc.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-navy hover:text-accent transition-colors"
            >
              View all services in detail
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work — with background image */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <span className="text-5xl font-bold text-white/10 mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Industrial manufacturing environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium">
                  We work with companies where digital distribution is a strategic advantage
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Who We Work With
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                Industries We Serve
              </h2>
              <p className="text-graphite mb-8">
                Our consulting services are designed for companies operating in
                sectors where digital distribution is a strategic advantage but
                requires careful planning and execution.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((ind) => (
                  <div
                    key={ind.label}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-light transition-colors"
                  >
                    <ind.icon size={22} className="text-navy shrink-0" />
                    <span className="text-sm font-medium text-graphite">
                      {ind.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 lg:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Why Digital Launch Lab
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                Why Clients Work With Us
              </h2>
              <p className="text-graphite leading-relaxed mb-8">
                We combine deep understanding of industrial business models with
                practical digital strategy expertise. Our work is designed to
                produce clarity — not complexity.
              </p>
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-graphite">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Business strategy collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA with background */}
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
            Ready to Build Your Digital Commercial Strategy?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Whether you are launching a new digital product or rethinking your
            B2B sales channels, we can help you build a clear, commercially
            viable plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-navy font-medium px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              Book a Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
