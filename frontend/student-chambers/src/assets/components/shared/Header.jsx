import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const linkClass = (hash) =>
    `transition ${
      activeHash === hash
        ? "text-secondary-teal"
        : "hover:text-secondary-teal"
    }`;

  return (
    <header className="bg-primary-White border-b border-gray-200 fixed w-full z-50">
      <nav className="max-w-container mx-auto px-4 h-20 flex items-center justify-between relative">

        {/* Brand */}
        <h4 className="font-heading text-primary-blue text-xl md:text-2xl">
          STUDENT CHAMBERS
        </h4>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a href="/" className={linkClass("#/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/#/rooms" className={linkClass("#/rooms")}>
              Rooms
            </a>
          </li>
          <li>
            <a href="/#/gallery" className={linkClass("#/gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <a href="/#/maps" className={linkClass("#/maps")}>
              Location
            </a>
          </li>
        </ul>

        {/* Mobile actions */}
        <div className="flex items-center gap-4">
          {/* Book Now always visible */}
          <a
            href="/#/booking-form"
            className="btn-primary px-4 py-2 rounded-lg text-sm md:text-base"
          >
            Book Now
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-primary-blue text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary-White border-t border-gray-200 shadow-md md:hidden">
            <ul className="flex flex-col gap-4 p-6 text-sm font-medium">
              <li>
                <a
                  href="/"
                  className={linkClass("#/")}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#/rooms"
                  className={linkClass("#/rooms")}
                  onClick={() => setMenuOpen(false)}
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="/#/gallery"
                  className={linkClass("#/gallery")}
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/#/maps"
                  className={linkClass("#/maps")}
                  onClick={() => setMenuOpen(false)}
                >
                  Location
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
