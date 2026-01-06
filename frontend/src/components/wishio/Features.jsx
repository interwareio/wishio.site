import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Calendar,
  MessageSquareHeart,
  Trash2,
  CloudUpload,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      titleKey: 'featureLocalTitle',
      descKey: 'featureLocalDesc',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Users,
      titleKey: 'featureImportTitle',
      descKey: 'featureImportDesc',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Calendar,
      titleKey: 'featureEventsTitle',
      descKey: 'featureEventsDesc',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      icon: MessageSquareHeart,
      titleKey: 'featureGreetingTitle',
      descKey: 'featureGreetingDesc',
      gradient: 'from-rose-400 to-pink-500',
    },
    {
      icon: Trash2,
      titleKey: 'featureEditTitle',
      descKey: 'featureEditDesc',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      icon: CloudUpload,
      titleKey: 'featureSyncTitle',
      descKey: 'featureSyncDesc',
      gradient: 'from-cyan-400 to-sky-500',
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t.featuresTitle}{' '}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {t.featuresTitleHighlight}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t[feature.titleKey]}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t[feature.descKey]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;