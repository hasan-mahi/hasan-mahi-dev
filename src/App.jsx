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
          pt: "64px", // ✅ Offset for sticky navbar
        }}
      >
        <Box id="hero" sx={{ scrollSnapAlign: "start", minHeight: "calc(100vh - 64px)", px: 3, py: 5 }}>
          <FadeInSection variant="zoomIn">
            <Hero />
          </FadeInSection>
        </Box>

        <SectionDivider />

        <Box id="about" sx={{ scrollSnapAlign: "start", minHeight: "calc(100vh - 64px)", px: 3, py: 5 }}>
          <FadeInSection variant="slideLeft" delay={0.1}>
            <About />
          </FadeInSection>
        </Box>

        <SectionDivider flip />

        <Box id="projects" sx={{ scrollSnapAlign: "start", minHeight: "calc(100vh - 64px)", px: 3, py: 5 }}>
          <FadeInSection variant="slideRight" delay={0.2}>
            <Projects />
          </FadeInSection>
        </Box>

        <SectionDivider />

        <Box id="skills" sx={{ scrollSnapAlign: "start", minHeight: "calc(100vh - 64px)", px: 3, py: 5 }}>
          <FadeInSection variant="fadeDelayed" delay={0.3}>
            <Skills />
          </FadeInSection>
        </Box>

        <SectionDivider flip />

        <Box id="contact" sx={{ scrollSnapAlign: "start", minHeight: "calc(100vh - 64px)", px: 3, py: 5 }}>
          <FadeInSection variant="fadeUp" delay={0.4}>
            <Contact />
          </FadeInSection>
        </Box>
      </Box>
    </>
  );
}
