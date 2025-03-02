import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Poster from "../components/Poster";
import Services from "../components/Services";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import Home from "../components/Home";
import WorkProcess from "../components/WorkProcess ";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Poster" element={<Poster />} />
        <Route path="/WorkProcess" element={<WorkProcess />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
