import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h4" className="section-title">Contact Me</Typography>
      <Paper elevation={3} sx={{ p:4 }}>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <TextField fullWidth label="Name" name="name" required sx={{ mb:2 }} />
          <TextField fullWidth label="Email" name="email" type="email" required sx={{ mb:2 }} />
          <TextField fullWidth label="Message" name="message" multiline rows={4} required sx={{ mb:2 }} />
          <Button type="submit" variant="contained" sx={{ backgroundColor:"#00f7ff" }}>Send Message</Button>
        </form>
      </Paper>
    </Box>
  );
}
