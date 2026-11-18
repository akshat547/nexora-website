
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
  <footer
    className="footer"
    style={{
      minHeight: '300px',
      border: '3px solid red'
    }}
  >
    <h1 style={{ color: 'white' }}>
      NEXORA FOOTER TEST
    </h1>

    <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              NEXORA<span>.</span>
            </a>

            <p>
              We turn ambitious ideas into meaningful
              digital experiences. Let's create something
              extraordinary together.
            </p>

            <a href="mailto:hello@nexora.com" className="footer-email">
              <Mail size={17} />
              hello@nexora.com
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            {quickLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer-social">
  <h3>Follow Us</h3>

  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    Instagram <ArrowUpRight size={15} />
  </a>

  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
    LinkedIn <ArrowUpRight size={15} />
  </a>

  <a href="https://github.com/" target="_blank" rel="noreferrer">
    GitHub <ArrowUpRight size={15} />
  </a>
</div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Nexora. All rights reserved.</p>

          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
