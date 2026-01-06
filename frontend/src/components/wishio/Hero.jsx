import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Apple, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/30 to-rose-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Glass Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-rose-200/20 rounded-full blur-xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose-100 text-rose-600 text-sm font-medium mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              {t.tagline}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              {t.heroTitle}{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href={siteConfig.iosAppStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full sm:w-auto h-14 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl flex items-center gap-3 shadow-lg shadow-slate-900/20">
                  <Apple className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">{t.downloadIOS}</div>
                    <div className="text-base font-semibold -mt-0.5">{t.appStore}</div>
                  </div>
                </Button>
              </motion.a>

              <motion.a
                href={siteConfig.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full sm:w-auto h-14 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl flex items-center gap-3 shadow-lg shadow-slate-900/20">
                  <Play className="w-6 h-6 fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">{t.getItOn}</div>
                    <div className="text-base font-semibold -mt-0.5">{t.googlePlay}</div>
                  </div>
                </Button>
              </motion.a>
            </div>

            {/* QR Codes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white rounded-2xl shadow-lg shadow-slate-200/50 backdrop-blur-sm border border-white/50">
                  <QRCodeSVG
                    value={siteConfig.iosAppStoreUrl}
                    size={80}
                    level="M"
                    fgColor="#1e293b"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2 font-medium">{t.ios}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white rounded-2xl shadow-lg shadow-slate-200/50 backdrop-blur-sm border border-white/50">
                  <QRCodeSVG
                    value={siteConfig.googlePlayUrl}
                    size={80}
                    level="M"
                    fgColor="#1e293b"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2 font-medium">{t.android}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 to-pink-400/30 rounded-[3rem] blur-3xl scale-95" />
              
              {/* Phone Frame */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden w-[280px] sm:w-[300px]">
                  {/* Notch */}
                  <div className="relative bg-slate-900 h-8 flex justify-center">
                    <div className="absolute top-0 w-32 h-7 bg-slate-900 rounded-b-3xl" />
                  </div>
                  
                  {/* Screenshot Placeholder */}
                  <div className="aspect-[9/18] bg-gradient-to-b from-rose-50 to-pink-50 flex items-center justify-center">
                    <img
                      src={siteConfig.phoneMockupImage}
                      alt="Wishio App Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                              <span class="text-white text-3xl font-bold">W</span>
                            </div>
                            <p class="text-slate-400 text-sm">${t.appPreview}</p>
                            <p class="text-slate-300 text-xs mt-1">${t.placeScreenshot}</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-32 h-1 bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border border-white/50"
              >
                <span className="text-3xl">🎂</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-4 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border border-white/50"
              >
                <span className="text-2xl">🎁</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;