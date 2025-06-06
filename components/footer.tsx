import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-emerald-500/30 py-12 px-4 hover:bg-slate-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="group">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              <span className="text-3xl">🦘</span>
              <span>Aussie Lotto Chance</span>
            </Link>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              Your trusted gateway to Australian lottery information and services.
            </p>
          </div>

          <div className="group">
            <h4 className="text-white font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-policy"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-white font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Account
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-white font-semibold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
              Responsible Gaming
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.gamblershelp.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center space-x-2"
                >
                  <img
                    src="/gamblershelp.svg"
                    alt="Gambler's Help Victoria"
                    className="w-24 h-10 rounded"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.vic.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center space-x-2"
                >
                  <img
                    src="/victoria.svg"
                    alt="Government Victoria"
                    className="w-24 h-10 rounded"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center space-x-2"
                >
                  <img src="/gamecare.svg" alt="GamCare" className="w-24 h-10 rounded bg-white p-2" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center space-x-2"
                >
                  <img src="/gamble.webp" alt="GambleAware" className="w-32 h-10 rounded bg-white p-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-500/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0 group">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold hover:scale-110 transition-transform duration-300 cursor-default">
              18+
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              Play responsibly
            </p>
          </div>

          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
            © 2025 Aussie Lotto Chance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
