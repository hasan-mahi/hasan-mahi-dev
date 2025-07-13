import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { moveGradient, gradientColors } from "./colorAnimation/gradient";

const projects = [
  {
    title: "Online Auto Auction System",
    description: [
      "Car auction platform with real-time bidding using Socket.IO",
      "MongoDB for data storage",
      "Push notifications and user authentication",
    ],
    link: "https://github.com/hasan-mahi/Online-Auto-Auction-System-Car-based-Auction",
    image: "https://github.com/hasan-mahi/Online-Auto-Auction-System-Car-based-Auction",
  },
  {
    title: "Restaurant Ordering System",
    description: [
      "Frontend built with HTML/CSS/JS",
      "PHP-based backend with MySQL database",
      "CRUD operations and user authentication",
    ],
    link: "https://github.com/hasan-mahi/RestaurantOrderingSystem",
    image: "https://github.com/hasan-mahi/RestaurantOrderingSystem",
  },
  {
    title: "Airbnb Project",
    description: [
      "Full-stack Airbnb clone",
      "Booking platform using Bootstrap and Node.js",
      "Dynamic listings and authentication",
    ],
    link: "https://github.com/hasan-mahi/Airbnb-Project",
    image: "https://github.com/hasan-mahi/Airbnb-Project",
  },
  {
    title: "Tenant Management System",
    description: [
      "Manage tenants and rental agreements",
      "Built with Laravel, Node.js and MySQL",
      "Includes authentication and dashboard",
    ],
    link: "https://github.com/hasan-mahi/Tenant-Management_admin",
    image: "https://github.com/hasan-mahi/Tenant-Management_admin",
  },
  {
    title: "Car Service Booking System",
    description: [
      "Booking and service tracking platform",
      "React frontend with Node.js backend",
      "Invoice and customer management",
    ],
    link: "https://github.com/hasan-mahi/Car-Service-Booking-System",
    image: "https://github.com/hasan-mahi/Car-Service-Booking-System",
  },
];

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 1200, mx: "auto" }}>
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
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 300px)",
            md: "repeat(3, 1fr)",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "stretch",
          },
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
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
                background: `linear-gradient(270deg, ${gradientColors.join(",")})`,
                backgroundSize: "400% 100%",
                animation: `${moveGradient} 9s linear infinite`,
                "&:hover": {
                  animation: `${moveGradient} 6s linear infinite`,
                  boxShadow: `0 0 6px #00e5ff, 0 0 12px #005eff, 0 0 18px #00e5ff`,
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
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
                  p: 0,
                  border: "none",
                }}
              >
                {p.image && (
                  <CardMedia
                    component="img"
                    image={p.image}
                    alt={p.title}
                    sx={{
                      height: 180,
                      objectFit: "cover",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  />
                )}

                <CardContent sx={{ p: 3, pb: 2 }}>
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

                <CardActions sx={{ justifyContent: "flex-end", px: 3, pb: 2 }}>
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
        ))}
      </Box>
    </Box>
  );
}

