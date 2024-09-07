import React from 'react';
import { Typography, Link, Grid, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yourName = 'Pradeepa';

  return (
    <footer style={{ backgroundColor: '#212121', padding: '20px 0', color: '#fff' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
            &copy; {currentYear} {yourName}. All rights reserved.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
            Follow me on:
          </Typography>
        </Grid>
        <Grid item>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener">
            <IconButton style={{ color: '#fff' }}>
              <GitHub />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener">
            <IconButton style={{ color: '#fff' }}>
              <LinkedIn />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
