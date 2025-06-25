// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const appBarVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Scrollspy with Intersection Observer
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    if (!sections.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0.25 }
    );

    sections.forEach((section) => observer.current.observe(section));

    return () => {
      if (observer.current) {
        sections.forEach((section) => observer.current.unobserve(section));
      }
    };
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "rgba(18,18,18,0.85)",
        backdropFilter: "blur(12px)",
        height: "100%",
        color: "#00f7ff",
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map(({ label, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              sx={{
                color: activeSection === href ? "#0ff" : "#00f7ff",
                textShadow:
                  activeSection === href ? "0 0 8px #0ff" : "none",
                "&:hover": {
                  color: "#0ff",
                  textShadow: "0 0 10px #0ff",
                },
                transition: "all 0.3s ease",
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/Hasan_Resume.pdf"
            download
            sx={{
              color: "#00f7ff",
              border: "1px solid #00f7ff",
              m: 1,
              borderRadius: 1,
              "&:hover": {
                color: "#0ff",
                borderColor: "#0ff",
                boxShadow: "0 0 10px #00f7ff",
                backgroundColor: "rgba(0,255,255,0.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Download Resume
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={appBarVariants}
          style={{ position: "sticky", top: 0, zIndex: 1300 }}
        >
          <AppBar
            position="static"
            elevation={0}
            sx={{
              bgcolor: "rgba(18, 18, 18, 0.6)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "none",
              borderBottom: "none",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: isMobile ? "flex-end" : "flex-end",
                flexWrap: "wrap",
                px: 2,
              }}
            >
              {isMobile ? (
                <IconButton edge="end" onClick={toggleDrawer(true)} aria-label="menu">
                  <MenuIcon sx={{ color: "#00f7ff" }} />
                </IconButton>
              ) : (
                <Box sx={{ display: "flex", gap: 2 }}>
                  {navLinks.map(({ label, href }) => (
                    <motion.div
                      key={href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        href={href}
                        sx={{
                          color: activeSection === href ? "#0ff" : "#00f7ff",
                          textTransform: "capitalize",
                          fontWeight: 500,
                          textShadow:
                            activeSection === href
                              ? "0 0 10px #0ff"
                              : "0 0 5px #00f7ff",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#0ff",
                            textShadow: "0 0 12px #0ff",
                          },
                        }}
                      >
                        {label}
                      </Button>
                    </motion.div>
                  ))}
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      href="/Hasan_Resume.pdf"
                      download
                      variant="outlined"
                      sx={{
                        borderColor: "#00f7ff",
                        color: "#00f7ff",
                        textTransform: "capitalize",
                        ml: 1,
                        "&:hover": {
                          borderColor: "#0ff",
                          color: "#0ff",
                          backgroundColor: "rgba(0,255,255,0.1)",
                          boxShadow: "0 0 10px #00f7ff",
                        },
                      }}
                    >
                      Resume
                    </Button>
                  </motion.div>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </motion.div>
      </AnimatePresence>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: "rgba(18,18,18,0.85)",
            backdropFilter: "blur(12px)",
            color: "#00f7ff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
