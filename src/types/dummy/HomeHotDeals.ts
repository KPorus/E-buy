import { StaticImageData } from "next/image";

export interface Timer {
    Days: number;
    Hours: number;
    Mins: number;
    Sec: number;
  }
  

export interface HotDealDTO {
    name: string;
    rating: number;
    image: StaticImageData
    timer: Timer;
  }