import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { keyframes } from "@emotion/react";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const gradientBorder = "linear-gradient(270deg, #00fff7, #0077ff, #00fff7)";

export default function Contact() {
  return (
    <Box
      sx={{
        mx: "auto",
        py: 6,
        px: 2,
        maxWidth: 700,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
          textAlign: "center",
          background: "linear-gradient(90deg, #00fff7, #0077ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 6px rgba(0, 247, 255, 0.3)",
          letterSpacing: "0.05em",
        }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          borderRadius: 4,
          p: "3px",
          background: gradientBorder,
          backgroundSize: "600% 600%",
          animation: `${gradientAnimation} 8s ease infinite`,
          boxShadow: "0 0 6px rgba(0, 255, 255, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            animation: `${gradientAnimation} 4s ease infinite`,
            boxShadow:
              "0 0 10px #00e5ff, 0 0 12px #005eff, 0 0 14px #00e5ff",
            transform: "scale(1.01)",
          },
        }}
      >
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            bgcolor: "#121212",
            color: "#eee",
            p: 4,
            border: "none",
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.25)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "inset 0 0 12px rgba(0,0,0,0.35)",
            },
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  input: { color: "#eee" },
                  "& label": { color: "#00f7ff" },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(0,0,0,0.12)",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "#00f7ff" },
                    "&:hover fieldset": { borderColor: "#0077ff" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00fff7",
                      boxShadow: "0 0 4px #00fff7",
                      backgroundColor: "rgba(0, 247, 255, 0.08)",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  input: { color: "#eee" },
                  "& label": { color: "#00f7ff" },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(0,0,0,0.12)",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "#00f7ff" },
                    "&:hover fieldset": { borderColor: "#0077ff" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00fff7",
                      boxShadow: "0 0 4px #00fff7",
                      backgroundColor: "rgba(0, 247, 255, 0.08)",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
                variant="outlined"
                sx={{
                  mb: 4,
                  input: { color: "#eee" },
                  "& label": { color: "#00f7ff" },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(0,0,0,0.12)",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "#00f7ff" },
                    "&:hover fieldset": { borderColor: "#0077ff" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00fff7",
                      boxShadow: "0 0 4px #00fff7",
                      backgroundColor: "rgba(0, 247, 255, 0.08)",
                    },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  color: "#00f7ff",
                  borderColor: "#00f7ff",
                  borderWidth: 1.5,
                  fontWeight: 600,
                  py: 1.3,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#00f7ff",
                    color: "#000",
                    boxShadow: "0 0 12px #00f7ff",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
