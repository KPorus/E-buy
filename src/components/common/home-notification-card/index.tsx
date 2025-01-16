"use client";
import Image from "next/image";
import styles from "./homeNotificationCard.module.scss";
import Rating from "../rating";
import { HotDealDTO, Timer } from "@/types/dummy/HomeHotDeals";
import { ProductListProps } from "@/types/dummy/HomeLatestProducts";
import { useState } from "react";
import Icdirection from "@/svg_icons/Icdirection";

function isHotDealDTOArray(data: any): data is HotDealDTO[] {
  return Array.isArray(data) && data.length > 0 && "name" in data[0];
}

function isProductListPropsArray(data: any): data is ProductListProps[] {
  return Array.isArray(data) && data.length > 0 && "products" in data[0];
}

function isMessageArray(data: any): data is { message: string }[] {
  return Array.isArray(data) && "message" in data[0];
}

const HomeNotificationCard = ({
  data,
}: {
  data: HotDealDTO[] | ProductListProps[] | { message: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = (length: number) => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevProduct = (length: number) => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  if (isHotDealDTOArray(data)) {
    return (
      <div id="ts--home-notification-card" className={styles.homeNotificationCard}>
        <h1>Hot Deals</h1>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="transition-all duration-500">
              <Image
                src={data[activeIndex].image.src}
                alt={`Image of ${data[activeIndex].name}`}
                width={300}
                height={200}
              />
              <div className="flex flex-col items-center gap-2">
                <h2>{data[activeIndex].name}</h2>
                <Rating value={data[activeIndex].rating} />
                <div className={styles.timer}>
                  {(["Days", "Hours", "Mins", "Sec"] as Array<keyof Timer>).map(
                    (unit) => (
                      <span key={unit} className={styles.timerUnit}>
                        {data[activeIndex].timer[unit]}
                        <h2>{unit.charAt(0).toUpperCase() + unit.slice(1)}</h2>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center my-3">
          <button
            onClick={() => prevProduct(data.length)}
            disabled={activeIndex === 0}
            className={`${styles.sliderButton} ${styles.left} ${
              activeIndex === 0 ? styles.disabledButton : ""
            }`}
          >
            <Icdirection bgColor="#000" />
          </button>
          <button
            onClick={() => nextProduct(data.length)}
            disabled={activeIndex === data.length - 1}
            className={`${styles.sliderButton} ${styles.right} rotate-180 ${
              activeIndex === data.length - 1 ? styles.disabledButton : ""
            }`}
          >
            <Icdirection bgColor="#000" />
          </button>
        </div>
      </div>
    );
  } else if (isProductListPropsArray(data)) {
    return (
      <div>
        <h1>Latest Products</h1>
        {data.map((product, index) => (
          <div key={index}>
            <h2>{product.id}</h2>
            {/* Render product details */}
          </div>
        ))}
      </div>
    );
  } else if (isMessageArray(data)) {
    return (
      <div>
        {data.map((msg, index) => (
          <p key={index}>{msg.message}</p>
        ))}
      </div>
    );
  } else {
    return <div>No data available</div>;
  }
};

export default HomeNotificationCard;
