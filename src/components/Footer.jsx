// src/components/Footer.jsx
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", bgcolor: "#f0f0f0" }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} Hasan. All rights reserved.</Typography>
    </Box>
  );
}
