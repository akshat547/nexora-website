import {
  ArrowUpRight,
  Play,
  Sparkles,
  MoveUpRight,
} from 'lucide-react';

function Home() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>

      <div className="hero-content">

        <div className="hero-tag">
          <Sparkles size={15} />
          <span>CREATIVE DIGITAL AGENCY</span>
        </div>

        <h1>
          We Build
          <br />
          <span>Digital</span> Experiences
          <br />
          That Matter.
        </h1>

        <p className="hero-description">
          We transform ambitious ideas into powerful digital
          experiences. Strategy, creativity and technology
          come together to grow your brand.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="primary-btn">
            Explore Our Work
            <ArrowUpRight size={19} />
          </a>

          <a href="#about" className="secondary-btn">
            <span className="play-icon">
              <Play size={14} fill="white" />
            </span>
            Discover Nexora
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>50<span>+</span></h3>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h3>30<span>+</span></h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3>5<span>+</span></h3>
            <p>Years Experience</p>
          </div>
        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-card">

          <div className="visual-top">
            <span className="live-dot"></span>
            DIGITAL INNOVATION
          </div>

          <div className="visual-orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-core">
              <Sparkles size={55} />
            </div>
          </div>

          <div className="visual-bottom">
            <div>
              <p>CREATIVE MINDS</p>
              <h3>Beyond Ordinary.</h3>
            </div>

            <MoveUpRight size={25} />
          </div>

        </div>

        <div className="floating-card">
          <Sparkles size={17} color="#a78bfa" />
          <span>Ideas into Reality</span>
        </div>

      </div>

    </section>
  );
}

export default Home;