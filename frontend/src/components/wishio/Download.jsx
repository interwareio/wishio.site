import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Apple, Play, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';

const Download = () => {
  const { t } = useLanguage();
  
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/30 to-rose-200/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Glass Card */}
          <div className="max-w-3xl mx-auto p-8 sm:p-12 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-2xl shadow-rose-100/50">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-xl shadow-rose-500/30"
            >
              <span className="text-4xl text-white font-bold">W</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              {t.downloadTitle}{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                {t.downloadTitleHighlight}
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              {t.downloadSubtitle}
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <div className="flex gap-8 justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <QRCodeSVG
                    value={siteConfig.iosAppStoreUrl}
                    size={100}
                    level="M"
                    fgColor="#1e293b"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-sm text-slate-500 mt-2 font-medium">{t.scanForIOS}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <QRCodeSVG
                    value={siteConfig.googlePlayUrl}
                    size={100}
                    level="M"
                    fgColor="#1e293b"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-sm text-slate-500 mt-2 font-medium">{t.scanForAndroid}</span>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm">
              <Shield className="w-4 h-4" />
              <span className="font-medium">{t.privacyNote}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;