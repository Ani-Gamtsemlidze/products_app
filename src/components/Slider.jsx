import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Slider() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        objectPosition: "top",
      }}
      src="image1.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        objectPosition: "top",
      }}
      src="image2.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        objectPosition: "top",
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
