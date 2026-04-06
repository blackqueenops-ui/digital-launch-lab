import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for the Digital Launch Lab website, operated by SIA AB Market & Trade.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-10 text-graphite text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                1. General
              </h2>
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use
                of the website located at{" "}
                <a
                  href="https://digital-launch-lab.com"
                  className="text-navy underline"
                >
                  digital-launch-lab.com
                </a>{" "}
                (the &ldquo;Site&rdquo;), operated by SIA AB Market &amp; Trade
                (registration number 40203580147), a limited liability company
                registered in Latvia, trading as Digital Launch Lab
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p className="mt-2">
                By accessing and using this Site, you agree to be bound by
                these Terms. If you do not agree with any part of these Terms,
                you should not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                2. Company Information
              </h2>
              <div className="bg-light rounded-lg p-5">
                <p>
                  <strong>Legal Name:</strong> SIA AB Market &amp; Trade
                </p>
                <p>
                  <strong>Trading Name:</strong> Digital Launch Lab
                </p>
                <p>
                  <strong>Registration Number:</strong> 40203580147
                </p>
                <p>
                  <strong>Registered Address:</strong> Ausekļa iela 3–83, Rīga,
                  LV-1010, Latvia
                </p>
                <p>
                  <strong>Operational Address:</strong> Ausekļa iela 3–83, Rīga,
                  LV-1010, Latvia
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://digital-launch-lab.com"
                    className="text-navy underline"
                  >
                    digital-launch-lab.com
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@digitallaunchlab.com"
                    className="text-navy underline"
                  >
                    contact@digitallaunchlab.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                3. Age Verification
              </h2>
              <p>
                This website and the services offered by Digital Launch Lab are
                intended for use by individuals who are at least 18 years of age
                or the age of legal majority in their jurisdiction, whichever is
                higher. By accessing this Site, you represent and warrant that
                you meet this age requirement.
              </p>
              <p className="mt-2">
                Our services are directed exclusively at business professionals
                and corporate entities. If you are under 18 years of age, you
                are not permitted to use this website or engage with our
                services in any capacity. We do not knowingly collect or
                process personal data from individuals under 18.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                4. Nature of Services
              </h2>
              <p>
                Digital Launch Lab provides business-to-business consulting and
                advisory services in the areas of digital strategy, product
                development planning, market research, and commercial concept
                development. Our services are directed at business clients and
                are not intended for individual consumers.
              </p>
              <p className="mt-2">
                The information presented on this website is for general
                informational purposes and does not constitute a binding offer.
                Specific service engagements are governed by separate agreements
                between the parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                5. Use of This Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of this website. Prohibited behaviour includes but is not limited to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Attempting to gain unauthorised access to the website or its
                  underlying systems
                </li>
                <li>
                  Using the website to transmit harmful, fraudulent, or
                  misleading content
                </li>
                <li>
                  Reproducing, duplicating, or redistributing website content
                  without prior written consent
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                page layouts, and visual design — is the property of SIA AB
                Market &amp; Trade or its licensors and is protected by
                applicable intellectual property laws. You may not reproduce,
                modify, or distribute any content from this website without our
                prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                7. Disclaimer
              </h2>
              <p>
                The information on this website is provided &ldquo;as is&rdquo;
                without warranties of any kind, either express or implied. While
                we endeavour to keep the information accurate and up to date, we
                make no representations or warranties about the completeness,
                accuracy, or reliability of the content.
              </p>
              <p className="mt-2">
                Nothing on this website constitutes professional advice. Any
                reliance you place on the information provided is at your own
                risk. For specific business advice, we recommend engaging our
                consulting services or seeking independent professional counsel.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                8. Risk Disclaimer
              </h2>
              <p>
                The consulting and advisory services provided by Digital Launch
                Lab involve strategic recommendations and market analysis.
                Business decisions carry inherent risks, and outcomes may vary
                depending on market conditions, implementation quality, and
                factors beyond our control.
              </p>
              <p className="mt-2">
                We do not guarantee specific business results, revenue
                increases, market share gains, or return on investment from the
                application of our consulting recommendations. All strategies,
                forecasts, and projections shared during our engagements are
                based on available data and professional judgement at the time
                of delivery and should not be treated as guarantees of future
                performance.
              </p>
              <p className="mt-2">
                Clients are solely responsible for evaluating the suitability of
                any recommendations for their specific business circumstances
                and for making independent decisions regarding implementation.
                We strongly advise seeking additional legal, financial, or
                industry-specific counsel where appropriate before acting on any
                strategic advice.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                9. Refund and Dispute Resolution Policy
              </h2>
              <p>
                All consulting engagements with Digital Launch Lab are governed
                by individual service agreements executed between the parties
                prior to the commencement of work. Payment terms, deliverables,
                and scope are defined within each respective agreement.
              </p>
              <p className="mt-2">
                <strong>Refunds:</strong> Due to the nature of consulting and
                advisory services, refunds are generally not available for work
                that has already been commenced or delivered. Where a service has
                been paid for in advance and has not yet been initiated, a
                refund request may be submitted within 14 calendar days of
                payment by contacting us at{" "}
                <a
                  href="mailto:contact@digitallaunchlab.com"
                  className="text-navy underline"
                >
                  contact@digitallaunchlab.com
                </a>
                . Each request will be reviewed on a case-by-case basis.
              </p>
              <p className="mt-2">
                <strong>Dispute Resolution:</strong> In the event of a dispute
                arising from our services, we encourage clients to first contact
                us directly to seek an amicable resolution. Disputes that
                cannot be resolved through direct negotiation within 30 calendar
                days may be referred to mediation under the rules of a mutually
                agreed mediation body. If mediation fails, the dispute shall be
                resolved in accordance with the governing law set forth in
                Section 13 of these Terms.
              </p>
              <p className="mt-2">
                <strong>Chargebacks:</strong> Clients agree to contact us
                directly before initiating any payment dispute or chargeback
                through their payment provider. Unresolved payment disputes may
                result in the suspension of ongoing services and access to
                deliverables until the matter is resolved.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                10. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, SIA AB Market &amp;
                Trade shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from or related to
                your use of this website or reliance on any information provided
                herein.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                11. External Links
              </h2>
              <p>
                This website may contain links to third-party websites. We have
                no control over the content or practices of these external sites
                and assume no responsibility for them. The inclusion of any link
                does not imply endorsement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                12. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Republic of Latvia. Any disputes arising
                from or in connection with these Terms shall be subject to the
                jurisdiction of the courts of Latvia.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                13. Amendments
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective upon posting to this page. Your continued use
                of the website after changes are posted constitutes your
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy mb-3">
                14. Contact
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-3 bg-light rounded-lg p-5 text-sm">
                <p className="font-medium text-navy">
                  SIA AB Market &amp; Trade
                </p>
                <p>Trading as Digital Launch Lab</p>
                <p>Ausekļa iela 3–83, Rīga, LV-1010, Latvia</p>
                <p>Registration No. 40203580147</p>
                <p className="mt-2">
                  Website:{" "}
                  <a
                    href="https://digital-launch-lab.com"
                    className="text-navy underline"
                  >
                    digital-launch-lab.com
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@digitallaunchlab.com"
                    className="text-navy underline"
                  >
                    contact@digitallaunchlab.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
