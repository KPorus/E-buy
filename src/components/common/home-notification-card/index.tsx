"use client";
import Image from "next/image";
import styles from "./homeNotificationCard.module.scss";
import Rating from "../rating";
import { HotDealDTO } from "@/types/dummy/HomeHotDeals";
import { useState } from "react";

function isHotDealDTOArray(data: any): data is HotDealDTO[] {
  return Array.isArray(data) && data.length > 0 && "name" in data[0];
}

const HomeNotificationCard = ({
  data,
}: {
  data: HotDealDTO[] | { message: string }[];
}) => {
  // State to track the current active product
  const [activeIndex, setActiveIndex] = useState(0);

  if (isHotDealDTOArray(data)) {
    const nextProduct = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to next product
    };

    const prevProduct = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      ); // Move to previous product
    };

    return (
      <div
        id="ts--home-notification-card"
        className={styles.homeNotificationCard}
      >
        <h1>Hot Deals</h1>
        {/* Product Display */}
        <div className="flex items-center justify-center pb-[4.5rem]">
          <div className="flex flex-col items-center justify-center">
            {/* Only show the active product */}
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
                <p>
                  Time Left: {data[activeIndex].timer.days}d{" "}
                  {data[activeIndex].timer.hours}h{" "}
                  {data[activeIndex].timer.minutes}m{" "}
                  {data[activeIndex].timer.seconds}s
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProduct}
          className="absolute left-1/2 bottom-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          onClick={nextProduct}
          className="absolute right-1/2 bottom-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    );
  } else {
    return data.map((msg, index) => <p key={index}>{msg.message}</p>);
  }
};

export default HomeNotificationCard;
