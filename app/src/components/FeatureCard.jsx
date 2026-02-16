import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const blobColors = {
  blue: 'bg-primary-blue/20',
  crimson: 'bg-primary-crimson/20',
  gold: 'bg-accent-gold/20',
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  variant = 'blue',
  linkLabel = 'Explore',
}) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 15 };
  const translateX = useSpring(useTransform(x, (v) => v * 0.3), springConfig);
  const translateY = useSpring(useTransform(y, (v) => v * 0.3), springConfig);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.5);
    y.set((e.clientY - centerY) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <>
      <div className="relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-xl shadow-lg p-6 h-full flex flex-col">
        <div
          className={`absolute top-0 right-0 w-24 h-24 opacity-40 blur-2xl ${blobColors[variant] || blobColors.blue}`}
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          aria-hidden
        />
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 border border-black/5 text-primary-blue text-xl">
            {icon}
          </span>
          <h3 className="font-heading font-semibold text-lg text-primary-blue">{title}</h3>
        </div>
        <p className="text-text-muted text-sm flex-1">{description}</p>
        {href && (
          <motion.span
            className="inline-flex items-center gap-2 mt-4 text-primary-crimson font-medium text-sm group"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {linkLabel}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.span>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ translateX, translateY }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      {href ? (
        <Link to={href} className="block h-full focus-ring rounded-2xl">
          {content}
        </Link>
      ) : (
        <div className="h-full">{content}</div>
      )}
    </motion.div>
  );
}
