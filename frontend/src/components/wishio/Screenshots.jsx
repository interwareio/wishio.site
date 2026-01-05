import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../config/siteConfig';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = siteConfig.screenshots;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            See{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Wishio
            </span>{' '}
            in action
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A clean, intuitive interface designed for quick access to what matters.
          </p>
        </motion.div>

        {/* Screenshots Display */}
        <div className="flex flex-col items-center">
          {/* Main Screenshot Carousel */}
          <div className="relative w-full max-w-4xl">
            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hidden sm:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Screenshots Container */}
            <div className="flex justify-center items-end gap-4 sm:gap-8">
              {screenshots.map((screenshot, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + screenshots.length) % screenshots.length;
                const isNext = index === (currentIndex + 1) % screenshots.length;
                const isVisible = isActive || isPrev || isNext;

                return (
                  <motion.div
                    key={screenshot.caption}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : isVisible ? 0.5 : 0,
                      x: isActive ? 0 : isPrev ? -20 : isNext ? 20 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`${
                      isVisible ? 'block' : 'hidden sm:block'
                    } ${isActive ? 'z-20' : 'z-10'} cursor-pointer`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {/* Phone Frame */}
                    <div className={`relative bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl transition-all duration-300 ${isActive ? 'shadow-rose-500/20' : ''}`}>
                      <div className="bg-slate-900 rounded-[2rem] overflow-hidden w-[200px] sm:w-[240px]">
                        {/* Notch */}
                        <div className="relative bg-slate-900 h-6 flex justify-center">
                          <div className="absolute top-0 w-24 h-5 bg-slate-800 rounded-b-2xl" />
                        </div>
                        
                        {/* Screenshot */}
                        <div className="aspect-[9/19] bg-gradient-to-b from-slate-800 to-slate-900">
                          <img
                            src={screenshot.src}
                            alt={screenshot.caption}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `
                                <div class="flex flex-col items-center justify-center h-full p-4 text-center bg-gradient-to-b from-rose-900/30 to-pink-900/30">
                                  <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                                    <span class="text-2xl">📱</span>
                                  </div>
                                  <p class="text-white/60 text-sm font-medium">${screenshot.caption}</p>
                                  <p class="text-white/40 text-xs mt-1">${screenshot.description}</p>
                                </div>
                              `;
                            }}
                          />
                        </div>
                        
                        {/* Home Indicator */}
                        <div className="flex justify-center py-2 bg-slate-900">
                          <div className="w-24 h-1 bg-slate-700 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-8"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {screenshots[currentIndex].caption}
              </h3>
              <p className="text-slate-400">
                {screenshots[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-rose-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;