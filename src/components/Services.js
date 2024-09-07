import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Stack,
  Chip,
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close, Star } from "@mui/icons-material";

const Services = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const services = [
    {
      label: "Web Development",
      imgSrc: "web.jpg",
      content: [
        "Create websites/apps using modern frameworks.",
        "Develop backend systems and APIs.",
        "Ensure responsiveness and mobile-friendliness.",
      ],
    },
    {
      label: "E-commerce Solutions",
      imgSrc: "e-com.jpg",
      content: [
        "Build e-commerce platforms using Shopify, WooCommerce, or custom solutions.",
        "Develop custom features like payment gateways and inventory management.",
      ],
    },
    {
      label: "Mobile App Development",
      imgSrc: "mobile.jpg",
      content: [
        "Develop cross-platform mobile apps with React Native or Flutter.",
        "Build native iOS and Android apps.",
      ],
    },
    {
      label: "Technical Support and Maintenance:",
      imgSrc: "support.jpg",
      content: [
        "Provide ongoing support, updates, and bug fixes.",
        "Optimize performance for websites and applications.",
      ],
    },
    {
      label: "CRM Integrations",
      imgSrc: "web.jpg",
      content: [
        "Integrate websites/apps with CRM systems like Salesforce, HubSpot, or Zoho CRM.",
        "Develop custom CRM solutions or plugins for client needs.",
      ],
    },
  ];

  return (
    <section>
      <Container style={{ padding: "60px 0" }}>
        <Typography variant="h5" align="center" className="primary" fontWeight={"bold"}>
          Services
        </Typography>
        <Typography variant="caption" align="center" gutterBottom>
          What I offer
        </Typography>
        <Stack
          className="container-content services"
          direction="row"
          justifyContent={"center"}
          spacing={0}
          columnGap={3}
          rowGap={3}
        >
          {services.map((s, i) => (
            <Service
              label={s.label}
              content={s.content}
              imgSrc={s.imgSrc}
              currentIndex={i}
            />
          ))}
        </Stack>
      </Container>
    </section>
  );
};

function Service({ label, content, imgSrc, currentIndex }) {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const showDialog = (index) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (imgSrc) {
      import(`../assets/images/${imgSrc}`)
        .then((imageModule) => {
          setImageSrc(imageModule.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    }
  }, [imgSrc]);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="210"
            image={imageSrc}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className="secondary" component="div">
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="secondary"
            onClick={() => showDialog(currentIndex)}
          >
            View more
          </Button>
        </CardActions>
      </Card>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {label} <Close onClick={handleClose} />
        </DialogTitle>
        <List component="nav" aria-label="main mailbox folders">
          {content.map((c) => (
            <ListItemButton>
              <ListItemIcon>
                <Star className="accent"/>
              </ListItemIcon>
              <ListItemText primary={c} />
            </ListItemButton>
          ))}
        </List>
      </Dialog>
    </>
  );
}

export default Services;
