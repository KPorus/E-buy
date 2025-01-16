import { StaticImageData } from "next/image";

interface Products {
  title: string;
  price: string;
  describtion: string;
  image: StaticImageData;
}

export interface ProductListProps {
  id: string;
  products: Products[];
}
