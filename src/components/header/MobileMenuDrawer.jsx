import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

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

export default function MobileMenuDrawer({
  drawerOpen,
  toggleDrawer,
  activeSection,
}) {
  // Close drawer on Escape key press only
  const handleKeyDown = (event) => {
    if (event.key === "Escape") toggleDrawer(false);
  };

  // Handle clicks on anchor links inside the drawer with delay to allow smooth scroll
  const handleDrawerClick = (e) => {
    const anchor = e.target.closest("a");
    if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
      setTimeout(() => toggleDrawer(false), 200);
    } else if (anchor) {
      // External or non-hash links close immediately
      toggleDrawer(false);
    }
    // Clicking outside links does not close drawer
  };

  return (
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
      onClick={handleDrawerClick}
      onKeyDown={handleKeyDown}
      role="navigation"
      aria-label="mobile navigation menu"
      tabIndex={-1}
    >
      <List
        component={motion.ul}
        variants={listVariants}
        initial="closed"
        animate={drawerOpen ? "open" : "closed"}
        sx={{ p: 0, m: 0, mt: 2 }}
        aria-live="polite"
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
              aria-current={activeSection === href ? "page" : undefined}
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
}
