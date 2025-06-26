import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export default function MenuToggle({ toggleDrawer }) {
  return (
    <IconButton
      edge="end"
      onClick={toggleDrawer(true)}
      aria-label="menu"
      size="large"
      sx={{ color: "#00f7ff", mr: 1 }}
    >
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
        <MenuIcon fontSize="inherit" />
      </motion.div>
    </IconButton>
  );
}
