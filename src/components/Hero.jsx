import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import { circularFloat, glow } from "../animation/float";
import { keyframes } from "@emotion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Smooth waving animation
const wave = keyframes`
  0% { transform: rotate(0deg) }
  10% { transform: rotate(14deg) }
  20% { transform: rotate(-8deg) }
  30% { transform: rotate(14deg) }
  40% { transform: rotate(-4deg) }
  50% { transform: rotate(10deg) }
  60% { transform: rotate(0deg) }
  100% { transform: rotate(0deg) }
`;

// Fade + slide up animation
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
      {/* Floating profile image */}
      <Box
        sx={{
          width: 180,
          height: 180,
          position: "relative",
          flexShrink: 0,
          borderRadius: "50%",
          boxShadow: "0 10px 25px rgba(0, 247, 255, 0.3)",
          animation: `${fadeSlideUp} 1.2s ease forwards`,
        }}
      >
        <Box
          component="img"
          src="/profile.jpeg"
          alt="Hasan"
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
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
        {/* Subtitle and social icons side-by-side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 1,
            flexWrap: "wrap",
          }}
        >
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

          {/* Social Icons */}
          <Tooltip title="GitHub" arrow>
            <IconButton
              component="a"
              href="https://github.com/hasan-mahi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#00f7ff",
                border: "2px solid",
                borderColor: "#00f7ff",
                width: 32,
                height: 32,
                padding: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#0ff",
                  borderColor: "#0ff",
                  boxShadow: "0 0 12px #00f7ff",
                  transform: "scale(1.1)",
                },
              }}
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn" arrow>
            <IconButton
              component="a"
              href="https://linkedin.com/in/hasan-mahi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#00f7ff",
                border: "2px solid",
                borderColor: "#00f7ff",
                width: 32,
                height: 32,
                padding: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#0ff",
                  borderColor: "#0ff",
                  boxShadow: "0 0 12px #00f7ff",
                  transform: "scale(1.1)",
                },
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            className="hero-title"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #00fff7, #0077ff, #00fff7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              userSelect: "none",
              margin: 0,
            }}
          >
            Hi, I'm Hasan Mahi
          </Typography>
          <Box
            component="span"
            sx={{
              display: "inline-block",
              animation: `${wave} 2.5s cubic-bezier(.36,.07,.19,.97) infinite`,
              transformOrigin: "70% 70%",
              fontSize: "1.6em",
              userSelect: "none",
              color: "#00f7ff",
              WebkitTextFillColor: "unset",
              background: "none",
              lineHeight: 1,
            }}
            aria-label="waving hand"
            role="img"
          >
            👋
          </Box>
        </Box>

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
          <strong>React</strong>, <strong>Node.js</strong>, and{" "}
          <strong>MongoDB</strong>. I create seamless user experiences,
          blending clean code with solid backend logic.
        </Typography>

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
              boxShadow: "0 0 15px #00f7ff",
              borderRadius: 2,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0ff",
                boxShadow: "0 0 30px #00f7ff",
                transform: "scale(1.05)",
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
