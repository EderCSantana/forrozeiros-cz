import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: CarouselImage[];
  interval?: number;
};

type Direction = "next" | "previous";

const SWIPE_THRESHOLD = 50;

const arrowButtonClasses =
  "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2";

// An endless image slider that advances automatically. Works best with three or more images.
export default function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");
  const touchStartX = useRef(0);
  const count = images.length;

  const showNext = () => {
    setDirection("next");
    setCurrent((index) => (index + 1) % count);
  };

  const showPrevious = () => {
    setDirection("previous");
    setCurrent((index) => (index - 1 + count) % count);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setCurrent((index) => (index + 1) % count);
    }, interval);
    return () => clearInterval(timer);
  }, [count, interval]);

  const handleTouchEnd = (event: TouchEvent) => {
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (distance > SWIPE_THRESHOLD) showPrevious();
    if (distance < -SWIPE_THRESHOLD) showNext();
  };

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden"
      onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => {
        // Position relative to the current slide: -1 is left of it, 0 is visible, 1 and up are to the right.
        const offset = ((index - current + count + 1) % count) - 1;
        // The slide that wraps around to the other end jumps there without animating across the screen.
        const isWrapping = direction === "next" ? offset === count - 2 : offset === -1;
        return (
          <div
            key={image.src}
            aria-hidden={offset !== 0}
            className={`absolute inset-0 shadow-sm ${isWrapping ? "" : "transition-transform duration-500 ease-out"}`}
            style={{ transform: `translateX(calc(${offset} * (100% + 1rem)))` }}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        );
      })}

      <button type="button" onClick={showPrevious} className={`${arrowButtonClasses} left-4`}>
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button type="button" onClick={showNext} className={`${arrowButtonClasses} right-4`}>
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
}
