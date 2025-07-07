import React from "react";
import { IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const iconButtonStyles = {
  color: "#00f7ff",
  border: "2px solid",
  borderColor: "#00f7ff",
  width: 32,
  height: 32,
  padding: 0,
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#0ff",
    borderColor: "#0ff",
    boxShadow: "0 0 12px #00f7ff",
    transform: "scale(1.1)",
  },
};

export default function SocialLinks() {
  // State to control email popup menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Open email menu
  const handleEmailClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Open Gmail compose window in browser with prefilled subject and body
  const openGmailCompose = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=uddinhasan930@gmail.com&su=Inquiry%20from%20Your%20Portfolio&body=Hello%20Hasan%2C%0D%0AI%20am%20reaching%20out%20to%20discuss%20potential%20collaboration%20or%20job%20opportunities.%20Please%20let%20me%20know%20when%20you%20are%20available.%0D%0AThank%20you%20for%20your%20time.%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D",
      "_blank",
      "noopener,noreferrer"
    );
    handleClose();
  };

  // Open default mail client app via mailto link
  const openMailClient = () => {
    window.location.href = "mailto:uddinhasan930@gmail.com";
    handleClose();
  };

  return (
    <>
      {/* GitHub */}
      <Tooltip title="GitHub" arrow>
        <IconButton
          component="a"
          href="https://github.com/hasan-mahi"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconButtonStyles}
          aria-label="GitHub"
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* LinkedIn */}
      <Tooltip title="LinkedIn" arrow>
        <IconButton
          component="a"
          href="https://linkedin.com/in/hasan-mahi"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconButtonStyles}
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Email with popup menu */}
      <Tooltip title="Email Options" arrow>
        <IconButton
          onClick={handleEmailClick}
          sx={iconButtonStyles}
          aria-controls={open ? "email-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          aria-label="Email options"
        >
          <EmailIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Email menu */}
      <Menu
        id="email-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "email-button",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={openGmailCompose}>Open Gmail on Browser</MenuItem>
        <MenuItem onClick={openMailClient}>Open Mail App</MenuItem>
      </Menu>
    </>
  );
}
