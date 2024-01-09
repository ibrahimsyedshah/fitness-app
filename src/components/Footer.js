import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} width="200px" height="40px" />
        <Typography variant="h7" pb='40px' mt='18px'>
          Copyright © Golds Gym 2024
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
