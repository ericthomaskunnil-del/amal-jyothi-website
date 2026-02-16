import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const springConfig = { stiffness: 200, damping: 15 };

export default function MagneticButton({
  to,
  href,
  children,
  className = '',
  primary = true,
  size = 'md',
  type = 'button',
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateX = useSpring(useTransform(x, (v) => v * 0.25), springConfig);
  const translateY = useSpring(useTransform(y, (v) => v * 0.25), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = 'inline-flex items-center justify-center font-medium focus-ring rounded-lg transition-colors';
  const sizeClass = size === 'lg' ? 'px-8 py-4 text-lg' : size === 'sm' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-sm';
  const colorClass = primary
    ? 'bg-primary-crimson text-white hover:bg-primary-blue'
    : 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5';

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { translateX, translateY },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  };

  const content = <motion.span {...motionProps} className={`${baseClass} ${sizeClass} ${colorClass} ${className}`}>{children}</motion.span>;

  if (to) {
    return (
      <Link to={to} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
