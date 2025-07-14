"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGlobalData } from "@/lib/hooks/useGlobalData";

const Header: React.FC = () => {
  const { siteName, loading } = useGlobalData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          {loading ? "Loading..." : siteName || "Eddie's Blog"}
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/articles">Articles</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}

        <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/articles" onClick={closeMenu}>
            Articles
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
