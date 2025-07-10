import { useState } from "react";
import logo from "../../assets/Rectangle20.png";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Navigation items with their corresponding URLs
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Teams", href: "#teams" },
    { name: "Reviews", href: "#reviews" },
  ];
  return (
    <nav className="container mx-auto  px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="relative">
          <img src={logo} className="w-[8rem] " alt="" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavHashLink
            smooth
            key={item.name}
            to={item.href}
            className={`font-medium ${
              activeItem === item.name
                ? "text-green-400 "
                : "text-white hover:text-green-500"
            }`}
            onClick={(e) => {
              setActiveItem(item.name);
            }}
          >
            {item.name}
          </NavHashLink>
        ))}
      </div>

      {/* Fiverr Profile Button */}
      <div className="hidden md:block">
        <a
          href="https://www.fiverr.com/solution_sqd?public_mode=true"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium text-sm"
        >
          Fiverr Profile
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-100 p-4 z-50 shadow-md">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium block py-2 text-base ${
                  activeItem === item.name ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={(e) => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.fiverr.com/solution_sqd?public_mode=true"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium text-center text-base"
            >
              Fiver Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
