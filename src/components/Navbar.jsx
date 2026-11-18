import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
     { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        NEXORA<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-cta mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk <ArrowUpRight size={17} />
        </a>
      </div>

      <a href="#contact" className="nav-cta desktop-cta">
        Let's Talk <ArrowUpRight size={17} />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;