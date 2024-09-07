import React from "react";
import { Typography, Container, Grid, Button, Stack } from "@mui/material";
import { Download } from "@mui/icons-material";
import aboutImg from "../assets/images/aboutimg.png";
import resume from "../assets/files/resume.pdf"; // Import your resume file path

const About = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="container">
      <Container maxWidth="md" style={{ padding: "60px 0" }}>
        <Typography variant="h5" align="center" className="primary" fontWeight={"bold"}>
          About Me
        </Typography>
        <Typography variant="caption" align="center" gutterBottom>
          My Introduction
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="container-content"
        >
          <Grid item xs={12} sm={6}>
            <img
              src={aboutImg}
              alt="About"
              style={{ maxWidth: "100%", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center" gutterBottom>
              👋 Hey there! I'm a full-stack developer. I specialize in Vue.js,
              Node.js, Nuxt.js, and Mongo DB.
              <br />
              I love creating smooth digital experiences,
              whether it's designing user-friendly interfaces or building
              powerful backend systems. Let's work together to bring your ideas
              to life!
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"15px"}
              padding={"20px"}
              marginBottom={"25px"}
            >
              <div>
                <span id="title">03+ </span>
                <br />
                <span>Years experience</span>
              </div>
              <div>
                <span id="title">10+ </span>
                <br />
                <span>Completed projects</span>
              </div>
              <div>
                <span id="title">01 </span>
                <br />
                <span>Companies worked</span>
              </div>
            </Stack>
            <Button
              variant="contained"
              size="large"
              className="button-primary"
              component="a"
              href={resume}
              download="Resume.pdf"
            >
              {"Download Resume"}
              <Download className="accent" style={{ margin: "5px" }} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
