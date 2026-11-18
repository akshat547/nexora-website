
import { Target, Eye, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-content">
          <span className="section-tag">ABOUT NEXORA</span>

          <h2>
            Turning Ideas Into
            <span> Digital Reality.</span>
          </h2>

          <p>
            Nexora is a creative digital agency focused on
            building meaningful digital experiences. We combine
            innovation, creativity and technology to help
            businesses grow.
          </p>

          <div className="about-features">
            <div>
              <Target color="#a78bfa" size={25} />
              <h3>Our Mission</h3>
              <p>Deliver creative digital solutions that make a difference.</p>
            </div>

            <div>
              <Eye color="#a78bfa" size={25} />
              <h3>Our Vision</h3>
              <p>Become a trusted partner for digital innovation.</p>
            </div>
          </div>

          <div className="about-stats">
            <div><h3>50+</h3><p>Projects</p></div>
            <div><h3>30+</h3><p>Clients</p></div>
            <div><h3>5+</h3><p>Years Experience</p></div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-card">
            <Users size={65} color="#a78bfa" />
            <h3>Creative Minds.</h3>
            <p>Building Tomorrow, Together.</p>
            <Award size={35} color="#f97316" />
          </div>
        </div>

      </div>
    </section>
  );
}


