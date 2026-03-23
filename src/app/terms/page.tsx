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
            Last updated: March 2026
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
                of the website operated by SIA AB Market &amp; Trade
                (registration number 40203580147), a limited liability company
                registered in Latvia, trading as Digital Launch Lab
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p className="mt-2">
                By accessing and using this website, you agree to be bound by
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
                3. Nature of Services
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
                4. Use of This Website
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
                5. Intellectual Property
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
                6. Disclaimer
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
                7. Limitation of Liability
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
                8. External Links
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
                9. Governing Law
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
                10. Amendments
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
                11. Contact
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
