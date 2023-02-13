import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo3.png';

const Footer = () => (
  <Box mt="80px" bgcolor="">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '240px', height: '120px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '10px' } }} mt="41px" textAlign="end" pb="40px">Created by Jeff Jiang</Typography>
  </Box>
);

export default Footer;
