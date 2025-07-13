import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { keyframes } from "@emotion/react";

const skillCategories = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Bootstarp", level: 95 },
    { name: "React.js", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Laravel", level: 70 },
  ],
  Database: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ],
  Other: [
    { name: "Git & GitHub", level: 90 },
    { name: "Cybersecurity", level: 60 },
    { name: "System Admin", level: 70 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const glowBar = keyframes`
  0% {
    box-shadow: 0 0 5px #0ff;
  }
  50% {
    box-shadow: 0 0 20px #0ff;
  }
  100% {
    box-shadow: 0 0 5px #0ff;
  }
`;

export default function Skills() {
  const [category, setCategory] = useState("Frontend");
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 800, mx: "auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#00f7ff",
          textAlign: "center",
          mb: 4,
        }}
      >
        My Skills
      </Typography>

      <Tabs
        value={category}
        onChange={(e, newValue) => setCategory(newValue)}
        centered
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            background: "linear-gradient(90deg, #0ff, #09f)",
            height: 3,
            borderRadius: 2,
          },
        }}
        sx={{
          mb: 4,
          "& .MuiTab-root": {
            color: "#ccc",
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "capitalize",
            "&.Mui-selected": {
              color: "#0ff",
            },
          },
        }}
      >
        {Object.keys(skillCategories).map((cat) => (
          <Tab key={cat} value={cat} label={cat} />
        ))}
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={category} // remount container when category changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ outline: "none" }}
        >
          {skillCategories[category].map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                    px: 0.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 500, color: "#eee" }}>
                    {skill.name}
                  </Typography>
                  <Typography sx={{ fontWeight: 500, color: "#aaa" }}>
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#222",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      backgroundImage: "linear-gradient(90deg, #0ff, #09f)",
                      animation: `${glowBar} 2s linear infinite`,
                    },
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
