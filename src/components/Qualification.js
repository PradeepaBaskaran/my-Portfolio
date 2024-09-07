import React, { useState } from "react";
import {
  Typography,
  Container,
  Stack,
  Chip,
  Avatar,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Certificates from "./Certificate";

const Qualification = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const education = [
    {
      label: "10th",
      description: `Goverment Girls Higher Secondary School - Pandhanallur`
    },
    {
      label: "12th",
      description: "Pachaimuthu Matriculation and Higher Secondary School"
    },
    {
      label: "B.E Electronics and Communication Engineering",
      description: `Affiliated to Anna University`
    },
  ];

  const work = [
    {
      label: "ANB Systems Pvt Ltd",
      description: `Software Developer`,
      year: "Aug 2021 - Present",
    }
  ];

  const [alignment, setAlignment] = useState("work");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const qualifications = alignment === "education" ? education : work;

  return (
    <section>
      <Container style={{ padding: "60px 0" }}>
        <Typography variant="h5" align="center" className="primary" fontWeight={"bold"}>
          Qualification & Certificates
        </Typography>
        <Typography variant="caption" align="center" gutterBottom>
          My Journey
        </Typography>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="normal"
            spacing={0}
            className="container-content"
          >
            <Grid item sm={12} md={4}>
              <Stack spacing={2} alignItems="center">
                <ToggleButtonGroup
                  className="toggle-button"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="education">Education</ToggleButton>
                  <ToggleButton value="work">Work</ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper className="stepper" activeStep={alignment === 'education'? 3 : 1} orientation="vertical">
                    {qualifications.map((step, index) => (
                      <Step key={index}>
                        <StepLabel
                          optional={
                            <>
                              <Typography variant="subtitle2">
                                {step.description}
                              </Typography>
                             {step.year && <Typography variant="caption">
                                {step.year}
                              </Typography>}
                            </>
                          }
                        >
                          {step.label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Stack>
            </Grid>
            <Grid item sm={12} md={8}>
              <Certificates />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Qualification;
