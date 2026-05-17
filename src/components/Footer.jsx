import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 lg:px-0 md:px-16 pt-16 md:pt-24 lg:pt-30 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="mb-10 md:mb-15">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white mb-3 tracking-wide text-sm">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <span className="text-white text-lg">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/my-bookings"
                  className="hover:text-white transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-white transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">
              CONTACT US
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:7869011622"
                  className="hover:text-white transition-colors"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="hover:text-white transition-colors"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex gap-5 text-white text-lg">
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              X
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              in
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              ◎
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
