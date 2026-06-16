import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * HeroCarousel - Auto-playing hero banner with 3 promotional slides
 * Features: auto-play with pause on hover, dot indicators, prev/next controls,
 * smooth opacity transitions, different gradient backgrounds per slide
 */

const slides = [
  {
    badge: 'Limited Time Offer',
    title: 'Summer Sale — 50% Off',
    subtitle: 'Discover incredible deals on trending fashion, tech, and lifestyle products.',
    cta: 'Shop Now',
    className: 'hero-slide-1'
  },
  {
    badge: 'Just Dropped',
    title: 'New Arrivals Collection',
    subtitle: 'Be the first to explore the latest styles and premium products curated for you.',
    cta: 'Explore Now',
    className: 'hero-slide-2'
  },
  {
    badge: 'Free Delivery',
    title: 'Free Shipping Worldwide',
    subtitle: 'Enjoy complimentary shipping on all orders over $50. No code needed.',
    cta: 'Start Shopping',
    className: 'hero-slide-3'
  }
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play: advances every 5 seconds, pauses on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${slide.className} ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="hero-content">
            <span className="hero-badge">{slide.badge}</span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button className="hero-cta">
              {slide.cta}
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}

      {/* Controls: arrows + dots */}
      <div className="carousel-controls">
        <button
          className="carousel-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default HeroCarousel;
