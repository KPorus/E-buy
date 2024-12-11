// Import the CategoryDTO interface
import { CategoryDTO } from "@/types/dummy/HomeCategory";
import { FeatureDTO } from "@/types/dummy/HomeFeature";
import f1 from "/public/images/feature1.jpeg";
import f2 from "/public/images/feature2.jpeg";
import f3 from "/public/images/feature3.jpeg";

// Create an array of indices
const indexCount = Array.from(Array(8).keys());

// Create an array of CategoryDTO objects
export const category: CategoryDTO[] = indexCount.map((el: number) => {
  return {
    count: el + Math.floor(Math.random() * 100) + 1, // Ensure count is a number
    title: `Category ${el}`,
  };
});

// Create an array of FeatureDTO objects
export const feature: FeatureDTO[] = [
  {
    title: "New",
    subTitle: "Jeans Shirt",
    image: f1,
  },
  {
    title: "2017",
    subTitle: "Women’s Glass",
    image: f2,
  },
  {
    title: "Best",
    subTitle: "Mens Shirt",
    image: f3,
  },
];
