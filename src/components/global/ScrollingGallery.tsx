import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  images: string[];
  scrollRight?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ images, scrollRight = true }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        const scrollSpeed = 0.5; // Adjust this value to reduce the speed
        scrollAmount += scrollRight ? scrollSpeed : -scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        } else if (scrollAmount <= 0) {
          scrollAmount = scrollContainer.scrollWidth / 2;
        }
      }
      requestAnimationFrame(scrollStep);
    };

    scrollStep();
  }, [scrollRight]);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap my-4" ref={scrollContainerRef}>
      <div className="flex" style={{ display: 'inline-flex' }}>
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-52 md:w-80 h-52 md:h-80 object-contain rounded-lg mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
