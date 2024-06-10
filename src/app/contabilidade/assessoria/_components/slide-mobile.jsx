import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export default function SlideMobile() {
  return (
    <Carousel className="  w-[100%] max-w-xs lg:hidden flex mt-[20px]">
      <CarouselContent></CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
