import Image from "next/image";
import styles from "./offerNotificationCard.module.scss";
import watch from '/public/images/watch.jpg';
import Rating from "../rating";
const OfferNotificationCard = () => {
  return (
    <div
      id="ts--offer-notification-card"
      className={styles.offerNotificationCard}
    >
      <h1>Hot Deals</h1>
      <div>
        <Image
          src={watch}
          alt="Offer Notification Card"
          width={300}
          height={200}
        />
        <h2>Smart Watch</h2>
        <Rating value={5} />
      </div>
    </div>
  );
};

export default OfferNotificationCard;
