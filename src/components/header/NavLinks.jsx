import React from "react";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function NavLinks({ navLinks, activeSection }) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {navLinks.map(({ label, href }) => (
        <motion.div key={href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            href={href}
            sx={{
              color: activeSection === href ? "#0ff" : "#00f7ff",
              textTransform: "capitalize",
              fontWeight: 500,
              textShadow: activeSection === href ? "0 0 10px #0ff" : "0 0 5px #00f7ff",
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
    </Box>
  );
}
