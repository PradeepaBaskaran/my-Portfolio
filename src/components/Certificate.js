import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ImageZoom from "react-medium-image-zoom";

const Certificates = () => {
  const certificate = [
    {
      name: "certificate 1",
      imgSrc: "phishing",
    }
  ];

  return (
    <div>
      {certificate.map((c, i) => {
        return (
          <Stack
            direction="row"
            justifyContent={i % 2 == 0 ? "start" : "end"}
            spacing={0}
            gap={2}
            paddingLeft={10}
            flexWrap={"wrap"}
          >
            <Certificate
              key={i}
              imgSrc={c.imgSrc}
              name={c.name}
              currentIndex={i}
            />
          </Stack>
        );
      })}
    </div>
  );
};

function Certificate({ imgSrc, name, currentIndex }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../assets/images/certificates/${imgSrc}.jpg`)
      .then((imageModule) => {
        // Assuming your image is the default export of the module
        setImageSrc(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [imgSrc]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="certificate-content shadow">
        {/* <img
          src={imageSrc}
          alt={name}
          onClick={() => openModal(currentIndex)}
          style={{ cursor: "pointer" }}
        /> */}
              <ImageViewer imageUrl={imageSrc} />

      </div>
    </>
  );
}

const ImageViewer = ({ imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`image-viewer ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <img src={imageUrl} alt="Expanded image" />
    </div>
  );
};

export default Certificates;
