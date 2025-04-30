
import React from "react";
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CarouselProps {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="w-full max-h-[600px] overflow-hidden relative">
      <ShadcnCarousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-0">
                <Card className="border-0 rounded-none">
                  <CardContent className="flex items-center justify-center p-0 aspect-[16/9] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </ShadcnCarousel>
    </div>
  );
};

export default Carousel;
