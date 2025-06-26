// src/App.jsx
import React from "react";
import { CssBaseline, Box } from "@mui/material";

import Header from "./components/header/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import FadeInSection from "./effect/FadeInSection";
import SectionDivider from "./effect/SectionDivider";
import WaveBackground from "./effect/WaveBackground";
import MouseGlowTrail from "./effect/MouseGlowTrail";

import "./index.css";

export default function App() {
  return (
    <>
      <CssBaseline />
      {/* Background and interactive effects */}
      <WaveBackground />
      <MouseGlowTrail />

      <Header />

      <Box
        component="main"
        className="snap-container"
        sx={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        <Box sx={{ scrollSnapAlign: "start", minHeight: "100vh", px: 3, py: 5 }}>
          <FadeInSection variant="zoomIn" className="hero-section">
            <Hero />
          </FadeInSection>
        </Box>

        <SectionDivider />

        <Box sx={{ scrollSnapAlign: "start", minHeight: "100vh", px: 3, py: 5 }}>
          <FadeInSection variant="slideLeft" delay={0.1} className="about-section">
            <About />
          </FadeInSection>
        </Box>

        <SectionDivider flip />

        <Box sx={{ scrollSnapAlign: "start", minHeight: "100vh", px: 3, py: 5 }}>
          <FadeInSection variant="slideRight" delay={0.2} className="projects-section">
            <Projects />
          </FadeInSection>
        </Box>

        <SectionDivider />

        <Box sx={{ scrollSnapAlign: "start", minHeight: "100vh", px: 3, py: 5 }}>
          <FadeInSection variant="fadeDelayed" delay={0.3} className="skills-section">
            <Skills />
          </FadeInSection>
        </Box>

        <SectionDivider flip />

        <Box sx={{ scrollSnapAlign: "start", minHeight: "100vh", px: 3, py: 5 }}>
          <FadeInSection variant="fadeUp" delay={0.4} className="contact-section">
            <Contact />
          </FadeInSection>
        </Box>
      </Box>
    </>
  );
}
