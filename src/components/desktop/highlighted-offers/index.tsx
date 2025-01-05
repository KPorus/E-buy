import { highlightedOffers } from "@/components/common/dummy/dummy";
import styles from "./highlightedOffers.module.scss";
import Image from "next/image";
import Button from "../button";

const HighlightedOffers = () => {
  return (
    <div
      id="ts--desktop-highlighted-offers-components"
      className={styles.highlightedContainer}
    >
      {highlightedOffers.map((feature, i) => (
        <div key={i} className={styles.highlightedOffer}>
          <Image
            src={feature.image}
            alt={feature.subTitle}
            width={500}
            height={500}
            className={styles.squareImage} // Optional: Add a class for additional styling
          />
          <div className={styles.highlightedBody}>
            <div>
              <h2>{feature.title}</h2>
              <p >{feature.subTitle}</p>
              <Button text="Shop Now" intent={"shopNow"}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightedOffers;
