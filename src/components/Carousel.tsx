
import { useEffect, useState } from "react";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

const Carousel = ({ images, interval = 5000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
            aria-label={image.alt}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      ))}

      {/* Caption overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white p-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 drop-shadow-lg animate-fade-in">
            Experience the Rhythm of Forró
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-6 drop-shadow-md animate-fade-in animation-delay-100">
            Immerse yourself in the vibrant world of Brazilian dance
          </p>
          <button className="bg-dance-orange hover:bg-dance-brown text-white py-3 px-6 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1 font-medium animate-fade-in animation-delay-200">
            Discover Our Events
          </button>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
