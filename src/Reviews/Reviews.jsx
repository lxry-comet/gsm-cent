import React, { useRef, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  // Przykładowa tablica danych, aby pokazać działanie slidera
  const reviewData = [1, 2, 3, 4, 5];
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const scroll = (direction) => {
    if (containerRef.current) {
      const cardWidth = 320; // min-width (300px) + gap (20px)
      const scrollAmount = cardWidth * (direction === 'left' ? -1 : 1);
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleDotClick = (index) => {
    if (containerRef.current) {
      const cardWidth = 320;
      containerRef.current.scrollLeft = index * cardWidth;
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const cardWidth = 320;
      const index = Math.round(containerRef.current.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="reviews">
      <h2 className="reviews__title">OPINIE NASZYCH KLIENTÓW</h2>
      
      <div className="reviews__wrapper">
        {/* Strzałka lewa */}
        <button 
          className="reviews__arrow reviews__arrow--left" 
          aria-label="Previous"
          onClick={() => scroll('left')}
        >
          &#10094;
        </button>

        <div 
          className="reviews__container"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {reviewData.map((_, index) => (
            <div key={index} className="review-card">
              <div className="review-card__header">
                <div className="review-card__avatar"></div>
                <div className="review-card__user-info">
                  <div className="review-card__line"></div>
                  <div className="review-card__line review-card__line--short"></div>
                </div>
              </div>
              <div className="review-card__body">
                {/* Miejsce na treść opinii */}
              </div>
            </div>
          ))}
        </div>

        {/* Strzałka prawa */}
        <button 
          className="reviews__arrow reviews__arrow--right" 
          aria-label="Next"
          onClick={() => scroll('right')}
        >
          &#10095;
        </button>
      </div>

      {/* Kropki nawigacyjne */}
      {/* <div className="reviews__dots">
        {reviewData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
            role="button"
            tabIndex={0}
          ></span>
        ))}
      </div> */}
    </section>
  );
};

export default Reviews;