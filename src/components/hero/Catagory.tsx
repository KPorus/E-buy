import { category } from "../common/dummy/dummy";
import styles from "./hero.module.scss";

const Catagory = () => {
  return (
    <div className={styles.catagoryContainer}>
      <div className={styles.catagoryTitle}>Catagory</div>

      {category.map((category, i) => (
        <div key={i} className={styles.catagory}>
          <h1>{category.title}</h1>
          <span>{category.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Catagory;
