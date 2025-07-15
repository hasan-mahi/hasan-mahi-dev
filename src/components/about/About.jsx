import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedGradientBorder from "../colorAnimation/AnimatedGradientBorder"; // Adjust if needed
import SimpleIconScroller from "./SimpleIconScroller"; // Import new scroller

const cardData = [
  {
    title: "Background",
    content:
      "🎓 IT Graduate from Multimedia University with a strong foundation in software engineering and full-stack development.",
  },
  {
    title: "Core Skills",
    content:
      "💡 Proficient in React, Node.js, MongoDB, Laravel, and MySQL. Skilled in building scalable, secure web applications.",
  },
  {
    title: "Experience",
    content:
      "🧠 Delivered production-grade apps including real-time auctions, service systems, and admin dashboards.",
  },
  {
    title: "Mindset",
    content:
      "🚀 Passionate about clean code, continuous learning, and building user-centric software that delivers real value.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const gradientColors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"];

export default function About() {
  return (
    <Box
      component={motion.section}
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#00f7ff",
          textAlign: "center",
          mb: 5,
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {cardData.map((card, idx) => (
          <AnimatedGradientBorder
            key={idx}
            colors={gradientColors}
            animationSpeed={9}
            borderRadius="1.25rem"
            padding="2px"
          >
            <Paper
              elevation={4}
              component={motion.div}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                p: 4,
                borderRadius: "1.25rem",
                backgroundColor: "#1e1e1e",
                color: "#ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
                border: "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#00f7ff",
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                {card.title}
              </Typography>
              <Typography sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
                {card.content}
              </Typography>
            </Paper>
          </AnimatedGradientBorder>
        ))}
      </Box>

      {/* Use the new SimpleIconScroller here */}
      <SimpleIconScroller />
    </Box>
  );
}
