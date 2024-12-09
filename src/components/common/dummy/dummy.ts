// Import the CategoryDTO interface
import { CategoryDTO } from "@/types/dummy/HomeCategory";

// Create an array of indices
const indexCount = Array.from(Array(8).keys());

// Create an array of CategoryDTO objects
export const category: CategoryDTO[] = indexCount.map((el: number) => {
  return {
    count: el + Math.floor(Math.random() * 100) + 1, // Ensure count is a number
    title: `Category ${el}`,
  };
});
