import Navbar from './components/Navbar';
import Home from './sections/Home';
import Services from './sections/Services';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;