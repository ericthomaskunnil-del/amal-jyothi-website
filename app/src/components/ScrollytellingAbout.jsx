import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Trail-blazer in technical education',
    body: 'Amal Jyothi College of Engineering (AJCE) is the first new generation engineering college in Kerala with the prestigious NAAC A++ accreditation. Managed by the Catholic Diocese of Kanjirappally.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    alt: 'Campus view',
  },
  {
    id: 2,
    title: 'Startups Valley TBI',
    body: 'Our campus is a hub of creativity, housing the largest startup ecosystem in Kerala. Industry-standard labs and a nurturing environment for future entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    alt: 'Innovation and startups',
  },
  {
    id: 3,
    title: 'Our Leadership',
    body: 'Under the guidance of Rev. Fr. Mathew Paikatt (Manager) and Dr. Z.V. Lakaparampil (Principal), AJCE continues to set benchmarks in engineering education.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Leadership',
  },
];

function StepText({ step, index, scrollYProgress }) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.15],
    [0.2, 1, 1, 0.2]
  );
  const y = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.15],
    [40, 0, 0, -40]
  );
  return (
    <motion.div style={{ opacity, y }} className="space-y-4">
      <h3 className="font-heading text-xl md:text-2xl text-primary-blue">{step.title}</h3>
      <p className="text-text-muted leading-relaxed">{step.body}</p>
    </motion.div>
  );
}

function StepImage({ step, index, scrollYProgress }) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start + 0.1, end - 0.1, end + 0.05],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.15, end - 0.15, end],
    [0.95, 1, 1, 0.95]
  );
  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src={step.image}
        alt={step.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

export default function ScrollytellingAbout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="about" className="relative py-20 md:py-28 bg-bg-light" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="md:sticky md:top-32 space-y-12">
            {steps.map((step, i) => (
              <StepText key={step.id} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
          <div className="relative h-[400px] md:h-[600px] md:sticky md:top-32">
            {steps.map((step, i) => (
              <StepImage key={step.id} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
