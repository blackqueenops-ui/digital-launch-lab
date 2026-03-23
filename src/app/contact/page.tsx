import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Digital Launch Lab to discuss your B2B digital strategy, product development, or commercial launch initiative.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you are exploring a digital growth initiative or ready to
              begin a consulting engagement, we are here to discuss how we can
              support your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-graphite text-sm mb-8">
                Describe your project or challenge and we will respond within
                two business days with an initial assessment.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a
                          href="mailto:contact@digitallaunchlab.com"
                          className="text-sm text-graphite hover:text-navy transition-colors"
                        >
                          contact@digitallaunchlab.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">
                          Registered Address
                        </p>
                        <p className="text-sm text-graphite">
                          Ausekļa iela 3–83
                          <br />
                          Rīga, LV-1010, Latvia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    Legal Entity
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Building size={18} className="text-navy" />
                    </div>
                    <div className="text-sm text-graphite space-y-1">
                      <p className="font-medium text-navy">
                        SIA AB Market &amp; Trade
                      </p>
                      <p>Registration No. 40203580147</p>
                      <p>Ausekļa iela 3–83, Rīga, LV-1010, Latvia</p>
                      <p className="text-muted text-xs mt-2">
                        Digital Launch Lab is a trading name operated by SIA AB
                        Market &amp; Trade
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-xl p-6 text-white">
                  <h4 className="text-sm font-semibold mb-3">
                    What to Expect
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">&#10003;</span>
                      We respond within two business days
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">&#10003;</span>
                      Initial discussion to understand your objectives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">&#10003;</span>
                      If there is a fit, we propose a structured engagement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">&#10003;</span>
                      No obligation at the enquiry stage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
