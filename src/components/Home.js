import React from 'react';
import { Typography, Container, Grid, IconButton } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import profileImage from '../assets/images/logo1.jpg'; // Import your profile image

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className='home'>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={profileImage} alt="Profile" className='home-img' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" align="center" className='primary' gutterBottom>
              Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              I am <span className='primary'>Pradeepa</span>, a passionate web developer.
            </Typography>
            <Typography variant="body1" align="center">
              Explore my skills, projects, and more.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <IconButton
        onClick={handleScrollDown}
        aria-label="scroll down"
        style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <ArrowDownward fontSize="large" />
      </IconButton>
    </section>
  );
};

export default Home;
