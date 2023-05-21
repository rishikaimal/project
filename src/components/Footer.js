import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "130px", height: "130px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      "You don't have to be great to start, but you have to start to be great."
      - Zig Ziglar
    </Typography>
  </Box>
);

export default Footer;
