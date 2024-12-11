import Carousel from "../carousel/Carousel";
import styles from "./hero.module.scss";

const Banner = () => {
 
  return (
    <div
      className={styles.bannerContainer}
      id="ts--desktop-banner"
    >
      <Carousel/>
    </div>
  );
};

export default Banner;
