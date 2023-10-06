import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Slider() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      style={{
        width: "100%",
        height: "550px",
        objectFit: "contain",
        objectPosition: "center",
        backgroundColor: "#ffd17e",
      }}
      src="image1.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{
        width: "100%",
        height: "550px",
        objectFit: "contain",
        objectPosition: "center",
        backgroundColor: "#b9b9b9",
      }}
      src="image2.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{
        width: "100%",
        height: "550px",
        objectFit: "contain",
        objectPosition: "center",
        backgroundColor: "rgb(207 238 238)",
      }}
      src="image3.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const Gallery = () => {
    return <AliceCarousel mouseTracking items={items} />;
  };
  return <Gallery />;
}

export default Slider;
