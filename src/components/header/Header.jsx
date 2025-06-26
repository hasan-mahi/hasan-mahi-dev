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
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import Switch from "./Switch";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const appBarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  // Close drawer when switching to desktop view
  useEffect(() => {
    if (!isMobile && drawerOpen) setDrawerOpen(false);
  }, [isMobile, drawerOpen]);

  // Scrollspy active section
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

  // Toggle drawer state from Switch
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Drawer menu content
  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "rgba(18,18,18,0.85)",
        backdropFilter: "blur(12px)",
        height: "100%",
        color: "#00f7ff",
      }}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {navLinks.map(({ label, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              sx={{
                color: activeSection === href ? "#0ff" : "#00f7ff",
                textShadow: activeSection === href ? "0 0 8px #0ff" : "none",
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
              bgcolor: trigger ? "rgba(0,255,255,0.03)" : "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              boxShadow: trigger ? "0 0 12px rgba(0,255,255,0.12)" : "none",
              borderBottom: trigger
                ? "1px solid rgba(0,255,255,0.15)"
                : "none",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: isMobile ? "flex-end" : "flex-end",
                flexWrap: "wrap",
                px: 2,
                minHeight: "64px",
              }}
            >
              {isMobile ? (
                <Switch isOpen={drawerOpen} onToggle={toggleDrawer} />
              ) : (
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
                          textShadow: activeSection === href
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
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
        onClose={() => toggleDrawer(false)}
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
