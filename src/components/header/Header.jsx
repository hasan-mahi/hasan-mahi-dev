import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Switch from "./Switch";
import MobileMenuDrawer from "./MobileMenuDrawer";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  // Scroll trigger with hysteresis disabled, threshold 40px
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  // Only apply scroll trigger effects on desktop
  const effectiveTrigger = !isMobile && trigger;

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

    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      if (observer.current) {
        sections.forEach((section) => observer.current.unobserve(section));
      }
    };
  }, []);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 1400 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: isMobile
            ? "transparent !important" // force transparent on mobile
            : effectiveTrigger
            ? "rgba(0,224,224,0.05)"
            : "#121212",
          backdropFilter: effectiveTrigger ? "blur(12px)" : "none",
          borderBottom: effectiveTrigger ? "1px solid rgba(0,224,224,0.1)" : "none",
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
        <MobileMenuDrawer
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          activeSection={activeSection}
        />
      </Drawer>
    </Box>
  );
}
