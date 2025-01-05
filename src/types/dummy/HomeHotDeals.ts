import { StaticImageData } from "next/image";

interface Timer {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  

export interface HotDealDTO {
    name: string;
    rating: number;
    image: StaticImageData
    timer: Timer;
  }