import React from "react";
import {
  Typography,
  Container,
  Stack,
  Chip,
  Avatar,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Download } from "@mui/icons-material";
import svc1Img from "../assets/images/regular_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png";
import psegLogo from "../assets/icons/pseglogo.png"

const Projects = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const projects = [
    {
      description:
        "Developed a web app with real-time data visualization, user authentication, and advanced search, using cutting-edge JavaScript frameworks for improved user interaction."
    },
    {
      description:
        "Implementing responsive solutions in accordance with client demands and dedicated to enhancing customer satisfaction.",
    },
    {
      description:
        "Delivered substantial support in responding to the client's needs and resolving their concerns.",
    },
  ];

  return (
    <section>
      <Container maxWidth="md" style={{ padding: "60px 0" }}>
        <Typography variant="h5" align="center" fontWeight={"bold"}>
          Projects
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          My most recent project/client &
        </Typography>
        <Typography variant="caption" align="center" gutterBottom>
          My roles and responsibilities
        </Typography>
        <Carousel
          navButtonsAlwaysVisible
          animation={"slide"}
          duration={800}
          fullHeightHover
          className="container-content"
        >
          {projects.map((item, index) => (
            <Paper key={index} elevation={0}>
              <div className="project-info">
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={8}
                >
                  <Grid item xs={12} sm={6}>
                    <img src={svc1Img} width={350} />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant="h4" align="center" gutterBottom>
                    <img src={psegLogo} alt="PSEG Logo" style={{ width: "150px", height: "auto" }}/>
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
