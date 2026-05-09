import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="h-full"
  >
    <Card className="bg-[#F5EDE4] rounded-2xl shadow-xl border-0 h-full flex flex-col justify-between">
      <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-2">
        <div className="flex gap-1 mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={20} fill="#C9A66B" stroke="#C9A66B" />
          ))}
        </div>
        <ImageWithFallback
          src={image}
          alt={name}
          width={80}
          height={80}
          sizes="64px"
          className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A66B] shadow-md"
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        <p className="text-base sm:text-lg text-gray-700 text-center italic leading-7 mb-4">“{text}”</p>
        <div className="text-center">
          <h4 className="font-semibold text-lg text-[#5A2C3D]" style={{ fontFamily: 'Playfair Display, serif' }}>{name}</h4>
          <p className="text-gray-500 text-xs">Verified Client</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
