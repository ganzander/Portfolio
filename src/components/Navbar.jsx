"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experiences" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleLinkClick(e, href) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-around">
            <a href="#" className="ps-16 pe-16">
              Ganesh Mangla
            </a>
            <ul className="flex items-center gap-6">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-sm text-white hover:text-yellow/400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-lg md:invisible lg:invisible">
          <div className="">
            <div className="flex justify-between">
              <a href="#">
                <h3 className="m-2">Ganesh Mangla</h3>
              </a>
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
            <div className="flex items-center ">
              {isMobileMenuOpen && (
                <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                      <a
                        className="block text-sm w-full text-xl font-semibold"
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
