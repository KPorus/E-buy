import { feature } from "@/components/common/dummy/dummy";
import styles from "./FeatureProducts.module.scss";
import Image from "next/image";

const FeatureProducts = () => {
  return (
    <div
      id="ts--desktop-feature-components"
      className={styles.featureContainer}
    >
      {feature.map((feature, i) => (
        <div key={i} className={styles.feature}>
          <Image
            src={feature.image}
            alt={feature.subTitle}
            width={500}
            height={500}
            className={styles.squareImage} // Optional: Add a class for additional styling
          />
          <div className={styles.featureBody}>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProducts;
