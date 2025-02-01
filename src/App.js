import "./App.css";
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
    </>
  );
}

export default App;
