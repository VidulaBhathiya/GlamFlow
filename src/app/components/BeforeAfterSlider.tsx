import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  description: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[2rem] border border-[#E7D8C7] bg-white shadow-xl"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[5/4] overflow-hidden">
        <ImageWithFallback
          src={beforeImage}
          alt={`${title} before`}
          width={1400}
          height={1100}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <ImageWithFallback
            src={afterImage}
            alt={`${title} after`}
            width={1400}
            height={1100}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/10 via-transparent to-[#C9A66B]/10" />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#5A2C3D] shadow-sm">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#5A2C3D] shadow-sm">
          {afterLabel}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2D2D2D]/72 via-[#2D2D2D]/24 to-transparent p-6 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-white/75">Before & After</p>
          <h3 className="mt-2 text-2xl sm:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            {title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/88">{description}</p>
        </div>

        <div
          className="absolute top-0 h-full w-px bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.18)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white shadow-xl backdrop-blur">
            <div className="h-8 w-8 rounded-full border border-[#E7D8C7] bg-[#FAF7F4]" />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="border-t border-[#E7D8C7] bg-white px-5 py-4">
        <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
          <span>Drag to compare the transformation</span>
          <span className="font-semibold text-[#5A2C3D]">{position}% revealed</span>
        </div>
      </div>
    </motion.div>
  );
}