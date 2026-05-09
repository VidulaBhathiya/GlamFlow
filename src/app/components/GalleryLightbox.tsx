import React, { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryLightboxProps {
  images: string[];
  openIndex: number | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ images, openIndex, onClose }) => {
  const [current, setCurrent] = useState(openIndex ?? 0);
  React.useEffect(() => {
    if (openIndex !== null) setCurrent(openIndex);
  }, [openIndex]);

  if (openIndex === null) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 bg-black/90 flex flex-col items-center">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white/80 hover:text-white text-2xl">×</button>
        <div className="relative w-full flex items-center justify-center min-h-[400px]">
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-2">‹</button>
          <ImageWithFallback
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            width={800}
            height={800}
            className="max-h-[70vh] max-w-full rounded-2xl shadow-2xl object-contain bg-black"
          />
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-2">›</button>
        </div>
        <div className="flex gap-2 justify-center mt-4 mb-2">
          {images.map((img, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full border-2 ${i === current ? 'bg-[#C9A66B] border-[#C9A66B]' : 'bg-white/30 border-white/50'} transition-all`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
