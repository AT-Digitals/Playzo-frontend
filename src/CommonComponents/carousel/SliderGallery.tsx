import React, { useState } from "react";

import { Box } from "@mui/material";
import image1 from "./Rectangle 688.png";
import image2 from "../../assets/image 17.png";
import image3 from "../../assets/image 16.png";
import image4 from "../../assets/image 15.png";
import image5 from "../../assets/Image (7).png";
import image6 from "../../assets/Image (8).png";
import leftNavi from "./left-navi.svg";
import righttNavi from "./right-navi.svg";
import styled from "styled-components";

const GalleryImages = [image1, image2, image3, image4, image5, image6, image1];

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;

const ArrowButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-top: 20px; /* Add margin to separate slider from images */
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 0.5rem;
  max-height: 960px; /* 160px * 6 images */
  overflow: hidden;
`;

const GalleryImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover; // This property maintains the aspect ratio and covers the container
  cursor: pointer;
`;
const ImageGallery = ({ images, onImageClick }: any) => {
  const visibleImages = images.slice(0, 6); // Show only the first 6 images

  return (
    <GalleryContainer>
      {visibleImages.map((image: string, index: number) => (
        <GalleryImage
          key={index}
          src={image}
          alt={`Image ${index}`}
          onClick={() => onImageClick(index)}
        />
      ))}
    </GalleryContainer>
  );
};

const GalleryWithCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GalleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + GalleryImages.length) % GalleryImages.length
    );
  };

  return (
    <div
      style={{
        marginBottom: 5,
      }}
    >
      <CarouselContainer>
        <ArrowButton onClick={goToPrev}>
          {" "}
          <img src={leftNavi} alt="left" />
        </ArrowButton>
        <SlideImage
          src={GalleryImages[currentIndex]}
          alt={`Image ${currentIndex}`}
        />
        <ArrowButton onClick={goToNext}>
          <img src={righttNavi} alt="left" />
        </ArrowButton>
      </CarouselContainer>
      <ImageGallery images={GalleryImages} onImageClick={handleImageClick} />
      <Box width={"83%"} display={"flex"} justifyContent={"flex-end"} mt={1}>
        <ArrowButton onClick={() => setCurrentIndex(currentIndex - 1)}>
          {" "}
          <img src={leftNavi} alt="left" />
        </ArrowButton>
        <ArrowButton onClick={() => setCurrentIndex(currentIndex + 1)}>
          <img src={righttNavi} alt="right" />
        </ArrowButton>
      </Box>
    </div>
  );
};

export default GalleryWithCarousel;
