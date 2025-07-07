// src/components/About.jsx
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  const highlightColor = "#00f7ff"; // Softer cyan consistent with your theme

  return (
    <Box
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{ py: 8, maxWidth: 700, mx: "auto", px: 2 }}
    >
  <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontWeight: 600,
    color: "#00f7ff", // same cyan color
    textAlign: "center",
    mb: 4,
  }}
>
  About Me
</Typography>



      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#1e1e1e",
          boxShadow: `0 4px 15px rgba(0, 247, 255, 0.15)`,
          color: "#ddd",
          lineHeight: 1.6,
          fontSize: "1.1rem",
          fontWeight: 500,
          letterSpacing: 0.5,
          textAlign: "center",
        }}
      >
        {[
          "🎓 IT Graduate from Multimedia University, passionate about full-stack development and writing clean, scalable code.",
          "💻 Practical experience building real-world apps: dynamic security systems at AFC, real-time bidding platforms, and full-stack solutions using React, Node.js, Laravel, MySQL & MongoDB.",
          "🚀 Committed to delivering secure, user-friendly software, constantly growing through certifications and self-learning.",
          "🌟 Excited to contribute innovation and dedication to your development team.",
        ].map((text, index) => (
          <Typography
            key={index}
            sx={{
              mb: index === 3 ? 0 : 2,
              transition: "color 0.25s ease, transform 0.25s ease",
              cursor: "default",
              "&:hover": {
                color: highlightColor,
                transform: "scale(1.02)",
              },
            }}
          >
            {text}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
}
