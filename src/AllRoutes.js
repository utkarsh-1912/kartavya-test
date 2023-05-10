import React from "react";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos/Photos.js";
import Videos from "./pages/Videos/Videos.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Donate from "./pages/Donate/Donate.js";
import Contact from "./pages/Contact/Contact.js";
import Works from "./pages/Works/Works.js";
import Faq from "./Component/Faqs/Faq.js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/work" element={<Works />} />
      <Route path="/faqs" element={<Faq />} />
    </Routes>
  );
};

export default AllRoutes;
