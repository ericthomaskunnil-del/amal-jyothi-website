export default function BlobBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-blue/5 animate-blob"
        style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div
        className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-primary-crimson/5 animate-blob-slow"
        style={{ borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', animationDelay: '-4s' }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-gold/5 animate-blob"
        style={{ borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%', animationDelay: '-8s' }}
      />
    </div>
  );
}
