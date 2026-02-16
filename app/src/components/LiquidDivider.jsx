export default function LiquidDivider({ flip = false, fillClass = 'bg-bg-light', className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden
    >
      <div
        className={`w-[120%] h-12 md:h-16 -ml-[10%] ${fillClass} animate-blob`}
        style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
}
