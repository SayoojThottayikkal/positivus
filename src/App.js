import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Poster from "./Components/Poster";
import Services from "./Components/Services";
import Spotlight from "./Components/Spotlight";
import Teams from "./Components/Teams";
import Testimonials from "./Components/Testimonials";
import WorkProcess from "./Components/WorkProcess ";

function App() {
  return (
    <>
      <Spotlight />
      <Services />
      <Poster />
      <WorkProcess />
      <Teams />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
