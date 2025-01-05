"use client";
import React, { useState, useMemo } from "react";
import ProductCard from "../product-card";
import styles from "./verticalSlider.module.scss";
import Icdirection from "@/svg_icons/Icdirection";

interface VerticalSliderProps {
  title?: string;
  data: {
    women: any[];
    men: any[];
  };
  category: "women" | "men"; // Specify the category
}

const VerticalSlider = ({ title, data, category }: VerticalSliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;

  // UseMemo for efficient filtering
  const filteredProducts = useMemo(() => {
    return data[category];
  }, [data, category]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const getProductsForCurrentPage = () => {
    const startIndex = currentPage * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-2 gap-4">
        {getProductsForCurrentPage().map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`${styles.sliderButton} ${styles.left} ${
              currentPage === 0 ? styles.disabledButton : ""
            }`}
          >
            <Icdirection bgColor="#000" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`${styles.sliderButton} ${styles.right} rotate-180 ${
              currentPage === totalPages - 1 ? styles.disabledButton : ""
            }`}
          >
            <Icdirection bgColor="#000" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalSlider;
