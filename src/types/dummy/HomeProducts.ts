import { StaticImageData } from "next/image";

interface Product {
    title: string;
    price: string;
    rating: number;
    image: StaticImageData;
  }
  
 export interface ProductCardDTO {
    women: Product[];
    men: Product[];
  }