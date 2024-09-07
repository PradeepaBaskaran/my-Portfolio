import React, { useEffect, useState } from "react";
import { Typography, Container, Stack, Chip, Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";

const Skills = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const skills = [{
    label: "JavaScript",
    imgSrc: "js"
  },
  {
    label: "Vue Js",
    imgSrc: "vue"
  },
  {
    label: "Node Js",
    imgSrc: "node"
  },
  {
    label: "Nuxt Js",
    imgSrc: ""
  },
  {
    label: "HTML",
    imgSrc: "html"
  },
  {
    label: "Mongo DB",
    imgSrc: "mongo"
  },
  {
    label: "Postgres Sql",
    imgSrc: "postgres"
  },
  {
    label: "CRM Integration",
    imgSrc: "crm"
  }]

  return (
    <section className="neutral">
      <Container maxWidth="md" style={{ padding: "60px 0" }}>
        <Typography variant="h5" align="center" className="primary" fontWeight={"bold"}>
          Skills
        </Typography>
        <Typography variant="caption" align="center" gutterBottom>
          My Technical Skills
        </Typography>
        <Stack
          className="container-content skills"
          direction="row"
          justifyContent={"center"}
          spacing={2}
          rowGap={3}
        >
          {skills.map((s, i)=> <Skill key={i} label={s.label} imgSrc={s.imgSrc} />)}
        </Stack>
      </Container>
    </section>
  );
};


function Skill({ label, imgSrc }) {

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if(imgSrc) {
    import(`../assets/icons/${imgSrc}.png`)
      .then(imageModule => {
        // Assuming your image is the default export of the module
        setImageSrc(imageModule.default);
      })
      .catch(error => {
        console.error('Error loading image:', error);
      });
    }
  }, [imgSrc]);

  return (
    <Chip className="skills-chip shadow"
      avatar={imageSrc && <img src={imageSrc} alt={label} style={{ width: '16px', height: '16px' }} />}
      label={label}
      variant="outlined"
      // style={{ marginRight: '8px', marginBottom: '8px' }}
    />
   )
}

export default Skills;
