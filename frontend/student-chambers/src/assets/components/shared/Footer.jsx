import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-primary-White mt-20">
      
      {/* Main footer content */}
      <nav
        aria-label="Footer navigation"
        className="max-w-container mx-auto px-4 py-16 grid gap-12 md:grid-cols-4"
      >
        {/* Brand */}
        <section>
          <h4 className="text-primary-White mb-4">Student Chambers</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Affordable, safe, and comfortable student accommodation designed
            for focused living.
          </p>
        </section>

        {/* Explore */}
        <section>
          <h4 className="text-primary-White mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline text-gray-300">Home</Link></li>
            <li><Link to="/rooms" className="hover:underline text-gray-300">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:underline text-gray-300">Gallery</Link></li>
            <li><Link to="/maps" className="hover:underline text-gray-300">Location</Link></li>
            <li><Link to="/booking-form" className="hover:underline text-gray-300">Book Now</Link></li>
          </ul>
        </section>

        {/* Support */}
        <section>
          <h4 className="text-primary-White mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:underline text-gray-300">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline text-gray-300">Contact Us</Link></li>
            <li><Link to="/policies" className="hover:underline text-gray-300">House Rules</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline text-gray-300">Privacy Policy</Link></li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h4 className="text-primary-White mb-4">Contact</h4>
          <address className="not-italic text-sm text-gray-300 space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:info@studentchambers.co.za"
                className="hover:underline text-gray-300"
              >
                info@studentchambers.co.za
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+27123456789" className="hover:underline">
                +27 12 345 6789
              </a>
            </p>
            <p>Location: South Africa, Pretoria</p>
          </address>
        </section>
      </nav>

      {/* Bottom bar */}
      <section className="border-t border-white/10">
        <div className="max-w-container mx-auto px-4 py-6 text-center">
          <small className="text-gray-400">
            © {new Date().getFullYear()} Student Chambers. All rights reserved.
          </small>
        </div>
      </section>
    </footer>
  );
}
