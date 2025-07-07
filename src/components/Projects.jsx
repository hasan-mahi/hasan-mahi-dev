import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const projects = [
  {
    title: "Online Auto Auction System",
    description: [
      "Car auction platform with real-time bidding",
      "MongoDB for data storage",
      "Push notifications and user authentication",
    ],
    link: "#",
  },
  {
    title: "Restaurant Ordering System",
    description: [
      "Frontend built with HTML/CSS/JS",
      "PHP-based backend with MySQL database",
      "CRUD operations and user authentication",
    ],
    link: "#",
  },
  {
    title: "Airbnb Project",
    description: [
      "Full-stack Airbnb clone",
      "Booking platform using React and Node.js",
      "Dynamic listings and authentication",
    ],
    link: "https://airbnb-project-68u9.onrender.com",
  },
  {
    title: "Tenant Management System",
    description: [
      "Manage tenants and rental agreements",
      "Built with React and Node.js",
      "Includes authentication and dashboard",
    ],
    link: "https://airbnb-project-68u9.onrender.com",
  },
  {
    title: "Car Service Management System",
    description: [
      "Booking and service tracking platform",
      "React frontend with Node.js backend",
      "Invoice and customer management",
    ],
    link: "https://airbnb-project-68u9.onrender.com",
  },
];

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const gradientBorder = "linear-gradient(270deg, #00fff7, #0077ff, #00fff7)";

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#00f7ff",
          textAlign: "center",
          mb: 6,
          textShadow: "0 0 6px rgba(0, 247, 255, 0.5)",
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((p, i) => (
          <Grid key={i} item>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  p: "2px",
                  background: gradientBorder,
                  backgroundSize: "600% 600%",
                  animation: `${gradientAnimation} 8s ease infinite`,
                  "&:hover": {
                    animation: `${gradientAnimation} 4s ease infinite`,
                    boxShadow: `0 0 6px #00e5ff, 0 0 12px #005eff, 0 0 18px #00e5ff`,
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  },
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: { xs: "100%", sm: 340, md: 360 },
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    bgcolor: "#121212",
                    color: "#eee",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    border: "none",
                  }}
                >
                  <CardContent sx={{ p: 0, mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {p.title}
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: "#ddd",
                        lineHeight: 1.6,
                        fontSize: "1rem",
                      }}
                    >
                      <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
                        {p.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "flex-end", px: 0, pb: 0 }}>
                    <Button
                      size="small"
                      href={p.link}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        color: "#00f7ff",
                        borderColor: "#00f7ff",
                        borderWidth: 1.5,
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        py: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#00f7ff",
                          color: "#000",
                          boxShadow: "0 0 12px #00f7ff",
                        },
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
