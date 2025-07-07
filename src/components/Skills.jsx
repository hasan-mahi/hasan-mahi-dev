import React from "react";
import { Box, Typography, Stack, Chip, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Web as WebIcon,
  Terminal as TerminalIcon,
  Dns as DnsIcon, // <--- Here
  Memory as MemoryIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const skills = [
  { name: "HTML", icon: <WebIcon /> },
  { name: "CSS", icon: <WebIcon /> },
  { name: "JavaScript", icon: <CodeIcon /> },
  { name: "React.js", icon: <CodeIcon /> },
  { name: "Node.js", icon: <CodeIcon /> },
  { name: "Express", icon: <SettingsIcon /> },
  { name: "PHP", icon: <CodeIcon /> },
  { name: "Laravel", icon: <SettingsIcon /> },
  { name: "Java", icon: <MemoryIcon /> },
  { name: "C++", icon: <MemoryIcon /> },
  { name: "MySQL / SQL", icon: <StorageIcon /> },
  { name: "MongoDB", icon: <StorageIcon /> },
  { name: "NoSQL", icon: <DnsIcon /> }, // fixed here
  { name: "System Administration", icon: <TerminalIcon /> },
  { name: "Cybersecurity", icon: <SecurityIcon /> },
  { name: "Git & GitHub", icon: <CloudIcon /> },
];

// Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 }, textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          background: "linear-gradient(90deg, #00fff7, #0077ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 8px rgba(0,247,255,0.4)",
        }}
      >
        Skills
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={chipVariants}>
              <Chip
                label={skill.name}
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      color: "#00f7ff",
                      width: 28,
                      height: 28,
                    }}
                    variant="rounded"
                  >
                    {skill.icon}
                  </Avatar>
                }
                sx={{
                  m: 0.8,
                  fontSize: "1rem",
                  fontWeight: 600,
                  px: 3,
                  py: 1.3,
                  borderRadius: "50px", // full pill shape
                  backgroundColor: "transparent",
                  border: "3px solid", // visible border width
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(45deg, #00fff7, #0077ff)",
                  transition: "all 0.35s ease",
                  color: "#00f7ff",
                  display: "flex",
                  alignItems: "center",
                  cursor: "default",
                  "&:hover": {
                    boxShadow: "0 0 12px #00f7ff, 0 0 24px #0077ff",
                    transform: "scale(1.07)",
                    borderImageSource:
                      "linear-gradient(45deg, #00fff7, #0077ff)",
                    cursor: "pointer",
                  },
                }}
              />
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
}
