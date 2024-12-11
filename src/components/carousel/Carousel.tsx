"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import bimg1 from "/public/images/fashion-1683364.jpg";
import bimg2 from "/public/images/room-1336497.jpg";
import Icdirection from "@/svg_icons/Icdirection";
import Button from "../button";
const Carousel = () => {
  const banner = [
    { image: bimg1, alt: "Fashion Image" },
    { image: bimg2, alt: "Room Image" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = banner.length; // Number of banners
  const bannerWidth = 100; // Adjust the width based on your layout

  // useEffect(() => {
  //   let interval: NodeJS.Timeout | null = null;

  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //     }, 6000);
  //   }

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [isHovered, totalSlides]);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  // const goToSlide = (index: any) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${currentSlide * bannerWidth}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {banner.map((img, i) => (
          <div
            key={i + 1}
            style={{
              flex: "0 0 100%",
            }}
            className={styles.imageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={img.image}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
              }}
              objectFit="cover"
            />
            <div className={styles.overlay}>
              <h1>Best Wooden</h1>
              <h2>CHAIR &amp; WARDROBE</h2>
              <div className={styles.buttons}>
                <Button text="VIEW MORE" intent={"viewMore"} />
                <Button text="PURCHASE" intent={"purchase"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className={`${styles.sliderButton} ${styles.left}  rotate-180 ${
          currentSlide === 0 ? styles.disabledButton : ""
        }`}
      >
        <Icdirection bgColor="#fff" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1}
        className={`${styles.sliderButton} ${styles.right} ${
          currentSlide === totalSlides - 1 ? styles.disabledButton : ""
        }`}
      >
        <Icdirection bgColor="#fff" />
      </button>

      {/* Carousel Indicators */}
      {/* <div className={style.indicatorsContainer}>
        {Array(totalSlides)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`${style.indicator} ${
                i === currentSlide ? style.activeIndicator : ""
              }`}
              onClick={() => goToSlide(i)}
            />
          ))}
      </div> */}
    </div>
  );
};

export default Carousel;
