import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CareerOutcomesDashboard({
  stats = {
    placements: 500,
    companies: 120,
    avgPackage: '8.5 LPA',
    higherStudies: 15,
  },
  employerLogos = [],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [placements, setPlacements] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [higherStudies, setHigherStudies] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      const easeOut = 1 - (1 - t) ** 3;
      setPlacements(Math.round(stats.placements * easeOut));
      setCompanies(Math.round(stats.companies * easeOut));
      setHigherStudies(Math.round((stats.higherStudies || 0) * easeOut));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, stats.placements, stats.companies, stats.higherStudies]);

  return (
    <section id="career-outcomes" className="py-20 md:py-28 bg-bg-light" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="font-heading text-3xl md:text-4xl text-primary-blue text-center mb-4">
          Career Outcomes
        </h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
          Live placement stats and employer partners.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-6 text-center"
          >
            <div className="font-heading text-3xl md:text-4xl text-primary-crimson font-bold">
              {placements}+
            </div>
            <div className="text-text-muted text-sm mt-1">Placements (2025)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-6 text-center"
          >
            <div className="font-heading text-3xl md:text-4xl text-primary-blue font-bold">
              {companies}+
            </div>
            <div className="text-text-muted text-sm mt-1">Companies</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-6 text-center"
          >
            <div className="font-heading text-3xl md:text-4xl text-accent-gold font-bold">
              {stats.avgPackage}
            </div>
            <div className="text-text-muted text-sm mt-1">Avg. Package</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-6 text-center col-span-2 md:col-span-1"
          >
            <div className="font-heading text-3xl md:text-4xl text-primary-crimson font-bold">
              {higherStudies}%
            </div>
            <div className="text-text-muted text-sm mt-1">Higher Studies</div>
          </motion.div>
        </div>
        {employerLogos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {employerLogos.slice(0, 12).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
