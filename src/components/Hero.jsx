import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ textAlign:"center", py:8, px:2 }}>
      <Typography variant="h2" className="hero-title">Hi, I'm Hasan</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt:2 }}>
        Full Stack Developer | React • Node.js • MongoDB
      </Typography>
      <Button
        variant="contained"
        href="#projects"
        sx={{
          mt:4, backgroundColor:"#00f7ff", color:"#000",
          boxShadow:"0 0 10px #00f7ff",
          "&:hover": { backgroundColor:"#0ff", boxShadow:"0 0 20px #00f7ff" }
        }}
      >
        View My Work
      </Button>
    </Box>
  );
}
