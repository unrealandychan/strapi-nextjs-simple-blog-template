import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h4>Platform</h4>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><Link href="/documentation">Documentation</Link></li>
          <li><Link href="/tutorials">Tutorials</Link></li>
          <li><Link href="/support">Support</Link></li>
          <li><Link href="/api">API</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/press">Press</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/cookies">Cookie Policy</Link></li>
          <li><Link href="/security">Security</Link></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 Eddie's Blog. All rights reserved.</p>
      <div className="footer-social">
        <a href="#" aria-label="Twitter">𝕏</a>
        <a href="#" aria-label="GitHub">⚡</a>
        <a href="#" aria-label="LinkedIn">💼</a>
      </div>
    </div>
  </footer>
);

export default Footer;
