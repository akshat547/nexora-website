
import { ArrowUpRight } from 'lucide-react';

function Portfolio() {
  const projects = [
    {
      number: '01',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      type: 'Web',
      description: 'A modern online shopping experience.'
    },
    {
      number: '02',
      title: 'Creative Agency',
      category: 'UI/UX Design',
      type: 'Design',
      description: 'A creative digital experience for a modern brand.'
    },
    {
      number: '03',
      title: 'Mobile Experience',
      category: 'App Development',
      type: 'App',
      description: 'A clean and intuitive mobile application.'
    },
    {
      number: '04',
      title: 'Brand Identity',
      category: 'Branding',
      type: 'Brand',
      description: 'A unique visual identity for a growing business.'
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-heading">
          <span className="section-tag">OUR WORK</span>
          <h2>
            Selected <span>Projects.</span>
          </h2>
          <p>
            A showcase of ideas transformed into meaningful digital experiences.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.number}>
              <div className="portfolio-card-image">
                <span>{project.number}</span>
                <span className="portfolio-type">{project.type}</span>
                <div className="portfolio-image-text">
                  {project.title}
                </div>
              </div>

              <div className="portfolio-card-content">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <a href="#contact" aria-label={`Discuss ${project.title}`}>
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
