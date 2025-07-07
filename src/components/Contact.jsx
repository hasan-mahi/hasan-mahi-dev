import React, { useState } from "react";
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
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const gradientBorder = "linear-gradient(270deg, #00fff7, #0077ff, #00fff7)";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openGmailCompose = (data) => {
    const subject = encodeURIComponent(data.subject || "New Message from Portfolio");
    const body = encodeURIComponent(
      `${data.message}\n\nRegards,\n${data.name}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=uddinhasan930@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openGmailCompose(formData);
  };

  return (
    <Box sx={{ mx: "auto", py: 6, px: 2, maxWidth: 700 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: "#00f7ff", textAlign: "center", mb: 4 }}
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
          "&:hover": {
            animation: `${gradientAnimation} 4s ease infinite`,
            boxShadow: "0 0 10px #00e5ff, 0 0 12px #005eff, 0 0 14px #00e5ff",
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
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <form onSubmit={handleSubmit}>
                 <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ ...inputStyles, mb: 4 }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                variant="outlined"
                sx={inputStyles}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                variant="outlined"
                sx={{ ...inputStyles, mb: 4 }}
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

const inputStyles = {
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
};
