import React, { useState } from "react";
import ContactUs from "./ContactUs";
import Home from "./Home";
import svc1Img from "../assets/images/regular_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Download, Close } from "@mui/icons-material";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
// import Services from "./Services";
import Projects from "./Projects";

const MainContent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <main className="secondary">
      <Home />
      <About />
      <Divider variant="middle" />
      <Skills />
      <Divider variant="middle" />
      <Qualification />
      <Divider variant="middle" />
      <Projects />
      <Divider variant="middle" />
      <div className="container">
        <h1>Contact me</h1>
        {/* <div className="contacts">
          <div className="contacts-info contacts-email">
            <Download />
            <div className="contacts-content">
              <h3>Email</h3>
              <p>ashiksmart000@gmail.com</p>
            </div>
          </div>
          <div className="contacts-info contacts-phone">
            <Download />
            <div className="contacts-content">
              <h3>Phone</h3>
              <p>9566263349</p>
            </div>
          </div>
        </div> */}
        <div className="contacts">
          <div className="contacts-main">
            <div className="contacts-info">
              <Download />
              <div className="contacts-content">
                <h3>Email</h3>
                <p>pradeepabaskaranb98@gmail.com</p>
              </div>
            </div>
            <div className="contacts-info">
              <Download />
              <div className="contacts-content">
                <h3>Phone</h3>
                <p>(+)91 8838344099</p>
              </div>
            </div>
          </div>
          <ContactUs />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
