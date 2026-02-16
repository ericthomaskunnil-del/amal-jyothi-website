import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function VideoReel({ videos = [] }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!videos.length) return;
    const activeRef = itemRefs.current[activeIndex];
    if (!activeRef) return;
    const video = activeRef.querySelector('video');
    if (video) {
      if (isInView) video.play().catch(() => {});
      else video.pause();
    }
  }, [activeIndex, isInView, videos.length]);

  if (!videos.length) {
    return (
      <section id="video-reel" className="py-16 bg-bg-dark text-text-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">Life at AJCE</h2>
          <p className="text-white/70">Video reel – add videos via the videos prop.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="video-reel" className="py-8 md:py-12 bg-bg-dark text-text-light" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-8">Life at AJCE</h2>
      </div>
      <div className="relative h-[70vh] max-h-[700px] overflow-hidden">
        <div
          className="absolute left-0 right-0 flex flex-col transition-transform duration-300 ease-out"
          style={{
            height: `${videos.length * 70}vh`,
            transform: `translateY(-${activeIndex * 70}vh)`,
          }}
        >
          {videos.map((v, i) => (
            <div
              key={v.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="w-full flex-shrink-0 flex items-center justify-center bg-black"
              style={{ height: '70vh' }}
            >
              <video
                src={v.src}
                poster={v.poster}
                muted
                playsInline
                loop
                className="max-h-full w-auto max-w-full object-contain"
                onTouchEnd={() => setActiveIndex((prev) => (prev + 1) % videos.length)}
              />
              {v.title && (
                <div className="absolute bottom-4 left-4 right-4 text-white text-center font-medium">
                  {v.title}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-primary-crimson' : 'bg-white/50'}`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
