import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">DL</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Digital Launch Lab
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-4">
              We help industrial and technology-focused businesses design digital
              products, build B2B sales channels, and structure online commercial
              strategies across Europe.
            </p>
            <p className="text-xs text-gray-500">
              Serving B2B clients across Europe
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-gray-500 leading-relaxed">
              <p>
                Digital Launch Lab is a trading name operated by{" "}
                <strong className="text-gray-400">SIA AB Market &amp; Trade</strong>
              </p>
              <p>Registration No. 40203580147</p>
              <p>Ausekļa iela 3–83, Rīga, LV-1010, Latvia</p>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} SIA AB Market &amp; Trade. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
