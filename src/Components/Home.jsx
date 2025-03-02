import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import Services from "../components/Services";
import Spotlight from "../components/Spotlight";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import WorkProcess from "../components/WorkProcess ";

export default function Home() {
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
