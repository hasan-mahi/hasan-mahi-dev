import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import GradientText from "../colorAnimation/GradientText";
import SocialLinks from "./SocialLinks";
import { circularFloat, glow } from "./float";
import { wave, fadeSlideUp } from "./heroEffects";
import Orb from "./Orb";

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: "80vh",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 6, md: 10 },
        color: "text.primary",
        backgroundColor: "background.default",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Profile Image with Orb Around */}
      <Box
        sx={{
          width: 220,
          height: 220,
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${fadeSlideUp} 1.2s ease forwards`,
        }}
      >
        {/* Orb behind the image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={190}
            forceHoverState={false}
          />
        </Box>

        {/* Profile Image */}
        <Box
          component="img"
          src="/profile.jpeg"
          alt="Hasan Mahi Profile"
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            objectFit: "cover",
            position: "relative",
            zIndex: 1,
            boxShadow: "0 10px 25px rgba(0, 247, 255, 0.3)",
            animation: `
              ${circularFloat} 6s ease-in-out infinite,
              ${glow} 4s ease-in-out infinite
            `,
          }}
        />
      </Box>

      {/* Text Content */}
      <Box
        maxWidth={550}
        sx={{
          animation: `${fadeSlideUp} 1.4s ease forwards`,
        }}
      >
        {/* Role & Social Links */}
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#00f7ff",
              letterSpacing: 3,
              fontWeight: 700,
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            Full Stack Developer
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mt: 2 }}>
            <SocialLinks />
          </Box>
        </Box>

        {/* Mobile Social Links */}
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2, mb: 2 }}>
          <SocialLinks />
        </Box>

        {/* Name with waving emoji */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
            animationSpeed={8}
            showBorder={false}
            className="hero-title"
            style={{
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              userSelect: "none",
              margin: 0,
            }}
          >
            Hi, I'm Hasan Mahi
          </GradientText>

          <Box
            component="span"
            sx={{
              display: "inline-block",
              animation: `${wave} 2.5s cubic-bezier(.36,.07,.19,.97) infinite`,
              transformOrigin: "70% 70%",
              fontSize: "1.6em",
              userSelect: "none",
              color: "#00f7ff",
              lineHeight: 1,
            }}
            aria-label="waving hand"
            role="img"
          >
            👋
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Passionate about building modern, scalable web apps using{" "}
          <strong>Node.js</strong>, <strong>Laravel</strong>, <strong>React</strong>, and{" "}
          <strong>MongoDB</strong>. I create seamless user experiences blending clean
          code with solid backend logic.
        </Typography>

        {/* Call to Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <Button
            variant="contained"
            href="#projects"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              backgroundColor: "#00f7ff",
              color: "#000",
              boxShadow: "0 0 8px rgba(0, 247, 255, 0.5)",
              borderRadius: 2,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0ff",
                boxShadow: "0 0 15px rgba(0, 247, 255, 0.7)",
                transform: "scale(1.02)",
              },
            }}
          >
            View My Work
          </Button>

          <Button
            variant="outlined"
            href="/Hasan-Mahi-Resume.pdf"
            target="_blank"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              borderColor: "#00f7ff",
              color: "#00f7ff",
              borderRadius: 2,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 247, 255, 0.15)",
                borderColor: "#0ff",
                transform: "scale(1.05)",
              },
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
