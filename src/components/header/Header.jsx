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
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Switch from "./Switch";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  closed: {},
};

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  useEffect(() => {
    if (!isMobile && drawerOpen) setDrawerOpen(false);
  }, [isMobile, drawerOpen]);

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

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        bgcolor: "rgba(18,18,18,0.95)",
        backdropFilter: "blur(14px)",
        height: "100%",
        color: "#00e0e0",
        px: 2,
        py: 3,
      }}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List
        component={motion.ul}
        variants={listVariants}
        initial="closed"
        animate={drawerOpen ? "open" : "closed"}
        sx={{ p: 0, m: 0 }}
      >
        {navLinks.map(({ label, href }) => (
          <ListItem
            key={href}
            component={motion.li}
            variants={itemVariants}
            disablePadding
            sx={{ mb: 1 }}
          >
            <ListItemButton
              component="a"
              href={href}
              sx={{
                color: activeSection === href ? "#0ff" : "#00e0e0",
                fontWeight: 600,
                "&:hover": {
                  color: "#0ff",
                  backgroundColor: "rgba(0,255,255,0.1)",
                },
                transition: "color 0.3s ease, background-color 0.3s ease",
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Mobile Resume Download Button */}
      <a href="/Hasan-Mahi-Resume.pdf" download style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
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
      </a>
    </Box>
  );

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 1400 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: trigger ? "rgba(0,224,224,0.05)" : "transparent",
          backdropFilter: trigger ? "blur(12px)" : "none",
          borderBottom: trigger ? "1px solid rgba(0,224,224,0.1)" : "none",
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            px: 3,
            minHeight: "64px",
          }}
        >
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map(({ label, href }) => (
                <Button
                  key={href}
                  href={href}
                  sx={{
                    color: activeSection === href ? "#0ff" : "#00e0e0",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    textShadow:
                      activeSection === href
                        ? "0 0 4px rgba(0, 255, 255, 0.6)"
                        : "0 0 1px rgba(0, 224, 224, 0.3)",
                    "&:hover": {
                      color: "#0ff",
                      textShadow: "0 0 6px rgba(0, 255, 255, 0.7)",
                    },
                    transition: "color 0.3s ease, text-shadow 0.3s ease",
                  }}
                >
                  {label}
                </Button>
              ))}

              {/* Desktop Resume Button with download */}
              <a
                href="/Hasan-Mahi-Resume.pdf"
                download
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00e0e0",
                    color: "#000",
                    fontWeight: 700,
                    boxShadow: "0 0 6px rgba(0, 224, 224, 0.4)",
                    py: 1.25,
                    px: 4,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#0ff",
                      boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)",
                      transform: "scale(1.04)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Resume
                </Button>
              </a>
            </Box>
          ) : (
            <Switch isOpen={drawerOpen} onToggle={toggleDrawer} />
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: "rgba(18,18,18,0.95)",
            backdropFilter: "blur(12px)",
            color: "#00e0e0",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
