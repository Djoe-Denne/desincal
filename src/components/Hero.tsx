import React, { useState, useEffect, useCallback, useRef } from 'react';
import carouselData from '../data/carousel.json';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const { slides } = carouselData;
  const timerRef = useRef<NodeJS.Timeout>();

  // Preload images
  useEffect(() => {
    const loadImages = () => {
      const loadStatuses = new Array(slides.length).fill(false);
      slides.forEach((slide, index) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
        img.src = slide.image;
      });
      setImagesLoaded(loadStatuses);
    };

    loadImages();
  }, [slides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const handleNextSlide = () => {
    nextSlide();
    startTimer();
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pest-dark/80 to-pest-dark/60 z-10" />
            {imagesLoaded[index] && (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            )}
          </div>

          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-700 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-8 transform transition-all duration-700 delay-100">
                  {slide.subtitle}
                </p>
                <button 
                  onClick={scrollToServices}
                  className="bg-pest-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-pest-green w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}