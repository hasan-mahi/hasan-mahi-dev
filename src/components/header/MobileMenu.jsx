import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function MobileMenu({ open, toggleDrawer, navLinks, activeSection }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          bgcolor: "rgba(18,18,18,0.85)",
          backdropFilter: "blur(12px)",
          color: "#00f7ff",
          width: 250,
        },
      }}
    >
      <List>
        {navLinks.map(({ label, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              onClick={toggleDrawer}
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
      </List>
    </Drawer>
  );
}
