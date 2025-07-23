import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CssBaseline, Box } from "@mui/material";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import FadeInSection from "./effect/FadeInSection";

import "./index.css"; // You still need this for body styling

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />

 <Box
  className="snap-container"
  sx={{
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none", // Firefox
    "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
  }}
>
        {/* Hero Section */}
        <Box id="hero" sx={{ px: 3, py: 5 }}>
          <FadeInSection variant="zoomIn">
            <Hero />
          </FadeInSection>
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ px: 3, py: 5 }}>
          <FadeInSection variant="slideLeft" delay={0.1}>
            <About />
          </FadeInSection>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ px: 3, py: 5 }}>
          <FadeInSection variant="slideRight" delay={0.2}>
            <Projects />
          </FadeInSection>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ px: 3, py: 5 }}>
          <FadeInSection variant="fadeDelayed" delay={0.3}>
            <Skills />
          </FadeInSection>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ px: 3, py: 5 }}>
          <FadeInSection variant="fadeUp" delay={0.4}>
            <Contact />
          </FadeInSection>
        </Box>
      </Box>
    </>
  );
}
