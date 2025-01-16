import { ProductCardDTO } from "@/types/dummy/HomeProducts";
import { CategoryDTO } from "@/types/dummy/HomeCategory";
import { HighlightedOfferDTO } from "@/types/dummy/HomeFeature";
import f1 from "/public/images/feature1.jpeg";
import f2 from "/public/images/feature2.jpeg";
import f3 from "/public/images/feature3.jpeg";

import p1 from "/public/images/Pro1.jpg";
import p2 from "/public/images/Pro2.jpg";
import p3 from "/public/images/Pro3.jpg";

import watch from "/public/images/watch.jpg";
import { HotDealDTO } from "@/types/dummy/HomeHotDeals";
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
export const highlightedOffers: HighlightedOfferDTO[] = [
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

// Create an array of ProductDTO objects
export const products: ProductCardDTO = {
  women: [
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Woolen T-Shirt Ash",
      price: "$99.00",
      rating: 4,
      image: p2,
    },
    {
      title: "Woolen T-Shirt",
      price: "$99.00",
      rating: 4,
      image: p3,
    },
    {
      title: "T-Shirt for Women",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
  ],
  men: [
    {
      title: "Silk Skirt",
      price: "$99.00",
      rating: 5,
      image: p2,
    },
    {
      title: "Woolen T-Shirt Ash",
      price: "$99.00",
      rating: 4,
      image: p1,
    },
    {
      title: "Woolen T-Shirt",
      price: "$99.00",
      rating: 5,
      image: p1,
    },
    {
      title: "T-Shirt for Women",
      price: "$99.00",
      rating: 4.5,
      image: p3,
    },
  ],
};

export const hotdeals:HotDealDTO[] = [
  {
    name: "Smart Watch1",
    rating: 4.5,
    image: watch,
    timer: {
      days: 23,
      hours: 15,
      minutes: 30,
      seconds: 59,
    },
  },
  {
    name: "Smart Watch2",
    rating: 4.5,
    image: watch,
    timer: {
      days: 12,
      hours: 15,
      minutes: 30,
      seconds: 59,
    },
  },
  {
    name: "Smart Watch3",
    rating: 4.5,
    image: watch,
    timer: {
      days: 2,
      hours: 15,
      minutes: 30,
      seconds: 59,
    },
  },
];
