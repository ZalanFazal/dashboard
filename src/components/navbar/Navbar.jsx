// Navbar.jsx
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    localStorage.clear()
    navigate("/login"); // Navigate to the login page
  };

  return (
    <AppBar position="static" style={{ background: '#405276', color: '#ffff' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Inventory Dashboard
        </Typography>
        <Button 
          color="inherit" 
          style={{ border: '1px solid #ff', color: '#ffff' }} 
          onClick={handleLoginClick} // Handle click event
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
