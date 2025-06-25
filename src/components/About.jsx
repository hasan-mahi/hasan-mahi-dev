// src/components/About.jsx
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box component={motion.section} sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body1">
          I'm a passionate full-stack developer based in UAE with experience building web apps using React, Node.js, MongoDB, and more. I love clean UI/UX, solving problems, and continuous learning.
        </Typography>
      </Paper>
    </Box>
  );
}
