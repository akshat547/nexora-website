
import {
  Code2,
  Palette,
  Smartphone,
  Search,
  ShoppingBag,
  Layers,
  ArrowUpRight
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      number: '01',
      title: 'Web Development',
      description: 'Modern, fast and responsive websites built to grow your business.'
    },
    {
      icon: <Palette size={28} />,
      number: '02',
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs that create memorable experiences.'
    },
    {
      icon: <Smartphone size={28} />,
      number: '03',
      title: 'App Development',
      description: 'Powerful mobile experiences designed for your audience.'
    },
    {
      icon: <Search size={28} />,
      number: '04',
      title: 'SEO Optimization',
      description: 'Improve your online visibility and reach the right audience.'
    },
    {
      icon: <ShoppingBag size={28} />,
      number: '05',
      title: 'E-Commerce',
      description: 'Scalable online stores that make shopping simple and seamless.'
    },
    {
      icon: <Layers size={28} />,
      number: '06',
      title: 'Digital Solutions',
      description: 'Creative digital strategies that turn ideas into reality.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <span className="section-tag">WHAT WE DO</span>
          <h2>
            Our Creative <span>Services.</span>
          </h2>
          <p>
            We combine creativity, strategy and technology
            to build digital experiences that make an impact.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-card-top">
                <div className="service-icon">
                  {service.icon}
                </div>
                <span>{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Let's Talk <ArrowUpRight size={17} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
