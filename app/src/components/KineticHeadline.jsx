import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function KineticHeadline({ children, className = '', as: Tag = 'h1' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const MotionTag = motion(Tag);

  return (
    <MotionTag ref={ref} style={{ y, opacity }} className={className}>
      <motion.span
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </MotionTag>
  );
}
