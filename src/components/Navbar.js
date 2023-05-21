import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.jpg";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "75px", height: "75px" }}
          />
        </Link>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" sx={{ color: "black" }}>
            Home
          </Button>
          <Button component={Link} to="/exercises" sx={{ color: "black" }}>
            Cal BMI
          </Button>
          <Button
            href="https://code-prime.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "black" }}
          >
            Code Prime
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
