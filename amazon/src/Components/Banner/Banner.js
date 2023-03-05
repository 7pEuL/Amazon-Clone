import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://m.media-amazon.com/images/I/71+oJ4+T2NL._SX3000_.jpg",

    "https://m.media-amazon.com/images/I/61rKNNX+o+L._SX3000_.jpg",
    
    "https://m.media-amazon.com/images/I/71KP7UsuT+L._SX3000_.jpg",

    "https://m.media-amazon.com/images/I/71dQJDr5BDL._SX3000_.jpg",

    "https://m.media-amazon.com/images/I/61HUQtC0WtL._SX3000_.jpg",

    "https://m.media-amazon.com/images/I/71VJQb4xR6L._SX3000_.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [index, images.length]);

  const prevSlide = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div className="banner">
        <div className="banner__container">
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              top: "20vh",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <IconButton
            className="banner__containerNext"
            onClick={nextSlide}
            sx={{
              position: "absolute",
              top: "20vh",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <img className="banner__image" src={images[index]} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
