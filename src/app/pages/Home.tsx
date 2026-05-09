import { useRef, useState, type CSSProperties, type MouseEventHandler } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slider from 'react-slick';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { TestimonialCard } from '../components/TestimonialCard';

type ArrowDirection = 'prev' | 'next';

type CarouselArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  direction: ArrowDirection;
};

function CarouselArrow({ className, style, onClick, direction }: CarouselArrowProps) {
  return (
    <button
      type="button"
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} testimonial`}
      onClick={onClick}
      className={`${className ?? ''} !flex !items-center !justify-center rounded-full border border-[#E7D8C7] bg-white text-[#5A2C3D] shadow-lg transition-all duration-300 hover:border-[#C9A66B] hover:text-[#C9A66B] hover:shadow-xl`}
      style={style}
    >
      {direction === 'prev' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.08]);

  const services = [
    {
      name: 'Luxury Balayage & Highlights',
      image: 'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?auto=format&fit=crop&w=800&q=80',
      price: 'From $400',
      description:
        'Hand-painted, dimensional color for a luminous, natural look. Our signature technique is trusted by NYC’s elite.',
    },
    {
      name: 'Premium Hair Extensions',
      image: 'https://images.unsplash.com/photo-1554519880-ffe46861d570?auto=format&fit=crop&w=800&q=80',
      price: 'From $900',
      description:
        'Seamless tape-in and keratin extensions for luxurious length and volume. Bridal and event specialists.',
    },
    {
      name: 'Precision Couture Cuts',
      image: 'https://images.unsplash.com/photo-1616970093325-7f40f58e0561?auto=format&fit=crop&w=800&q=80',
      price: 'From $200',
      description:
        'Expert cuts tailored to your features and lifestyle. The best hair salon for women in Orlando and Miami.',
    },
    {
      name: 'Signature Color Services',
      image: 'https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=800&q=80',
      price: 'From $250',
      description:
        'Rich, vibrant color with advanced techniques. Premium hair color for every shade and style.',
    },
  ];

  const testimonials = [
    {
      name: 'Sophia M.',
      text:
        'GlamFlow is absolutely incredible. The attention to detail, the luxury experience, and my hair has never looked better. This is what a $500 salon should feel like.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Isabella R.',
      text:
        'From the moment I walked in, I felt like royalty. The stylists are true artists and the results speak for themselves. Worth every penny!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1706607321814-7cab2f6dea85?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Olivia K.',
      text:
        'I’ve been to salons all over NYC and Miami. GlamFlow is in a league of its own. The best balayage I’ve ever had, hands down.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1654168080461-87e8081d68c7?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const transformations = [
    {
      title: 'Dimensional Balayage Refresh',
      description: 'A soft correction that adds lightness at the face and depth through the ends.',
      beforeImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Luxury Extension Blend',
      description: 'Seamless volume and length with a finish that moves naturally and photographs beautifully.',
      beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
      afterImage: 'https://images.unsplash.com/photo-1554519880-ffe46861d570?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Glossy Editorial Finish',
      description: 'A polished, camera-ready finish created for events, dinners, and elevated everyday wear.',
      beforeImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
      afterImage: 'https://images.unsplash.com/photo-1616970093325-7f40f58e0561?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const locations = [
    {
      city: 'New York City',
      address: '789 Madison Ave, New York, NY 10065',
      phone: '(212) 555-0198',
      hours: 'Mon–Sat: 9am–8pm',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9999999999995!2d-73.969!3d40.773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzDCsDQ2JzIzLjAiTiA3M8KwNTgnMDguNCJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
      booking: '/booking?location=nyc',
    },
    {
      city: 'Orlando',
      address: '456 Park Ave, Orlando, FL 32801',
      phone: '(407) 555-0123',
      hours: 'Mon–Sat: 9am–7pm',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9999999999995!2d-81.379!3d28.538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjjCsDMyJzE3LjAiTiA4McKwMjInNDQuMCJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
      booking: '/booking?location=orlando',
    },
    {
      city: 'Miami',
      address: '123 Ocean Dr, Miami Beach, FL 33139',
      phone: '(305) 555-0456',
      hours: 'Mon–Sat: 10am–8pm',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.9999999999995!2d-80.130!3d25.790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjXCsDQ3JzI0LjAiTiA4MMKwMDcnNDguMCJX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus',
      booking: '/booking?location=miami',
    },
  ];

  const faqs = [
    {
      q: 'What makes GlamFlow Salon a luxury salon?',
      a: 'Our award-winning stylists, premium products, and bespoke approach set us apart. We offer a sanctuary of elegance and personalized artistry for every guest.',
    },
    {
      q: 'Do you offer bridal and event hair services?',
      a: 'Yes! We specialize in bridal hair, luxury updos, and event styling in NYC, Orlando, and Miami. Book a consultation for your big day.',
    },
    {
      q: 'What hair extension methods do you use?',
      a: 'We offer premium tape-in, keratin bond, and hand-tied extensions for seamless, natural results. Our stylists are certified experts.',
    },
    {
      q: 'How do I book an appointment?',
      a: 'Simply click any “Book Appointment” button or visit our Booking page. Choose your location and service, and our team will confirm your reservation.',
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <CarouselArrow direction="prev" />,
    nextArrow: <CarouselArrow direction="next" />,
  };

  const sectionReveal = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeOut' as const },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
  };

  return (
    <div>
      <motion.section
        ref={heroRef}
        className="relative min-h-[82vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white/70"
        {...sectionReveal}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="space-y-6 sm:space-y-7 max-w-2xl"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
              initial="hidden"
              animate="show"
            >
              <motion.span className="inline-block lux-kicker mb-2 text-xs sm:text-sm" variants={itemReveal}>
                The GlamFlow Standard
              </motion.span>
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] lux-heading font-semibold mb-3 max-w-[12ch]" style={{ color: '#2d2d2d' }} variants={itemReveal}>
                Experience <span style={{ color: '#C9A66B' }}>Luxury Hair Artistry</span> for Women Who Expect More
              </motion.h1>
              <motion.h2 className="text-base sm:text-lg text-gray-700 max-w-xl mb-6 font-normal" style={{ textShadow: '0 1px 0 #fff8' }} variants={itemReveal}>
                GlamFlow Salon delivers couture color, precision cuts, and bespoke styling across New York City, Orlando, and Miami. Discover the elevated salon experience trusted by women who value detail, discretion, and beautiful results.
              </motion.h2>
              <motion.div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full max-w-xl" variants={itemReveal}>
                <Link to="/booking" className="w-full sm:w-auto">
                  <button className="lux-button-primary w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg tracking-wide" style={{ minHeight: 54, letterSpacing: '0.02em' }}>
                    Book Appointment
                  </button>
                </Link>
                <Link to="/services" className="group w-full sm:w-auto">
                  <button className="lux-button-secondary w-full sm:w-auto border-2 border-[#C9A66B] text-[#C9A66B] px-7 py-4 rounded-full font-semibold text-base sm:text-lg tracking-wide inline-flex items-center justify-center gap-2" style={{ minHeight: 54, letterSpacing: '0.02em' }}>
                    <span>Explore Services</span>
                    <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
              <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl" variants={itemReveal}>
                <div className="rounded-2xl border border-[#E7D8C7] bg-white/80 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#C9A66B] mb-1">
                    <Star size={16} fill="#C9A66B" stroke="#C9A66B" />
                    <span className="text-xs uppercase tracking-[0.2em]">Rated 4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Loved by 2,400+ guests</p>
                </div>
                <div className="rounded-2xl border border-[#E7D8C7] bg-white/80 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#C9A66B] mb-1">
                    <MapPin size={16} />
                    <span className="text-xs uppercase tracking-[0.2em]">Three Cities</span>
                  </div>
                  <p className="text-sm text-gray-600">NYC, Orlando, Miami</p>
                </div>
                <div className="rounded-2xl border border-[#E7D8C7] bg-white/80 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[#C9A66B] mb-1">
                    <Award size={16} />
                    <span className="text-xs uppercase tracking-[0.2em]">As Seen In</span>
                  </div>
                  <p className="text-sm text-gray-600">Vogue, Elle, Harper’s Bazaar</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative mt-10 lg:mt-0 lg:pl-4" style={{ y: heroImageY, scale: heroImageScale }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/70">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?auto=format&fit=crop&w=900&q=80"
                  webpSrc="https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?auto=format&fit=crop&w=900&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?auto=format&fit=crop&w=900&q=90"
                  alt="Luxury hair salon woman GlamFlow"
                  width={900}
                  height={1100}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="w-full h-[360px] xs:h-[440px] sm:h-[520px] md:h-[620px] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5A2C3D]/18 via-transparent to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 left-4 right-4 lg:-bottom-8 lg:left-auto lg:right-6 lg:w-80 rounded-2xl border border-[#E7D8C7] bg-white/95 backdrop-blur px-5 py-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#C9A66B] mb-1">Luxury concierge</p>
                    <p className="text-sm text-gray-700">Private consultations, premium products, and service pricing designed for $400+ transformations.</p>
                  </div>
                  <ChevronRight size={18} className="text-[#C9A66B] shrink-0" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">Our Expertise</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              Signature Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Indulge in a curated collection of salon services designed for polished, camera-ready hair. From premium hair color to the best hair extensions in NYC, Orlando, and Miami, every appointment is tailored, elevated, and results-driven.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.div key={service.name} className="group flex h-full flex-col rounded-2xl bg-white p-3 lux-card" whileHover={{ y: -12, scale: 1.02 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <div className="relative mb-4 h-72 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    width={800}
                    height={1000}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#5A2C3D]/78 via-[#5A2C3D]/28 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link to="/booking" className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#5A2C3D] shadow-lg transition-all duration-300 hover:bg-[#C9A66B] hover:text-white">
                      Quick Book
                    </Link>
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A2C3D]">{service.price}</span>
                  </div>
                </div>
                <h3 className="text-xl mb-2 lux-heading" style={{ color: '#2d2d2d' }}>
                  {service.name}
                </h3>
                <p className="mb-2 flex-1 text-sm text-gray-600">{service.description}</p>
                <p className="font-semibold text-[#C9A66B]">{service.price}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="bg-[#C9A66B] text-white px-10 py-4 rounded-full font-semibold lux-button-primary shadow-lg">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-[#F5EDE4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">The GlamFlow Difference</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              Why Discerning Clients Choose GlamFlow
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our approach feels less like a typical salon visit and more like a couture fitting for your hair. We blend technical precision, warm hospitality, and elevated aesthetics for a consistently polished result.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch">
            <motion.div className="rounded-[2rem] border border-[#E7D8C7] bg-white p-8 sm:p-10 lux-card flex flex-col justify-between" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
              <div>
                <p className="text-sm lux-kicker mb-3">What sets us apart</p>
                <h3 className="text-2xl sm:text-3xl mb-4 lux-heading" style={{ color: '#2d2d2d' }}>
                  A premium salon experience, designed around you
                </h3>
                <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
                  From bespoke consultations to finish-level styling, GlamFlow is built for clients who want healthy hair, refined color, and a service experience that feels calm, polished, and professionally guided.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Color specialists</p>
                  <p className="text-sm text-gray-700">Balayage, blonde work, and correction with precision.</p>
                </div>
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Luxury products</p>
                  <p className="text-sm text-gray-700">Olaplex, Kérastase, and Kevin Murphy backed results.</p>
                </div>
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Client care</p>
                  <p className="text-sm text-gray-700">Consultations, aftercare, and maintenance plans.</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div className="text-center p-7 bg-white rounded-2xl lux-card flex flex-col items-center h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8B4BC]/20 rounded-full mb-4" initial={{ opacity: 0, scale: 0.7, rotate: -12 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Award size={40} className="text-[#C9A66B]" />
                </motion.div>
                <h3 className="text-xl mb-3 lux-heading" style={{ color: '#2d2d2d' }}>Master Stylists</h3>
                <p className="text-gray-600 text-sm">Award-winning artists with 15+ years of expertise in luxury color, extensions, and bridal styling.</p>
              </motion.div>
              <motion.div className="text-center p-7 bg-white rounded-2xl lux-card flex flex-col items-center h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8B4BC]/20 rounded-full mb-4" initial={{ opacity: 0, scale: 0.7, rotate: -12 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}>
                  <Sparkles size={40} className="text-[#C9A66B]" />
                </motion.div>
                <h3 className="text-xl mb-3 lux-heading" style={{ color: '#2d2d2d' }}>Luxury Products</h3>
                <p className="text-gray-600 text-sm">Exclusive Olaplex, Kérastase, and Kevin Murphy lines for healthy, luminous hair.</p>
              </motion.div>
              <motion.div className="text-center p-7 bg-white rounded-2xl lux-card flex flex-col items-center h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8B4BC]/20 rounded-full mb-4" initial={{ opacity: 0, scale: 0.7, rotate: -12 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
                  <Star size={40} className="text-[#C9A66B]" />
                </motion.div>
                <h3 className="text-xl mb-3 lux-heading" style={{ color: '#2d2d2d' }}>Editorial Finish</h3>
                <p className="text-gray-600 text-sm">A polished finish that photographs beautifully and wears effortlessly between visits.</p>
              </motion.div>
              <motion.div className="text-center p-7 bg-white rounded-2xl lux-card flex flex-col items-center h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8B4BC]/20 rounded-full mb-4" initial={{ opacity: 0, scale: 0.7, rotate: -12 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}>
                  <Users size={40} className="text-[#C9A66B]" />
                </motion.div>
                <h3 className="text-xl mb-3 lux-heading" style={{ color: '#2d2d2d' }}>Personal Touch</h3>
                <p className="text-gray-600 text-sm">Bespoke consultations and artistry tailored to your features, routine, and goals.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">Client Love</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              What Our Clients Say
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              See why GlamFlow is rated the best hair salon in NYC, Orlando, and Miami.
            </p>
          </div>
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="px-4 pb-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-[#F5EDE4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">Our Work</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              Hair Transformations
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Explore a before-and-after transformation in real time, then hover through more signature results created for color, extension, and styling clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
            <BeforeAfterSlider
              beforeImage={transformations[0].beforeImage}
              afterImage={transformations[0].afterImage}
              title={transformations[0].title}
              description={transformations[0].description}
            />

            <motion.div className="rounded-[2rem] border border-[#E7D8C7] bg-white p-8 shadow-xl" whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
              <p className="text-sm lux-kicker mb-3">Transformation Notes</p>
              <h3 className="text-2xl mb-4 lux-heading" style={{ color: '#2d2d2d' }}>
                What changes in the chair
              </h3>
              <div className="space-y-4">
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Consultation</p>
                  <p className="text-sm text-gray-700">Customized mapping for color, shape, and maintenance.</p>
                </div>
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Technique</p>
                  <p className="text-sm text-gray-700">Hand-painted placement and finish-level styling with soft dimension.</p>
                </div>
                <div className="rounded-2xl bg-[#FAF7F4] border border-[#E7D8C7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] mb-1">Result</p>
                  <p className="text-sm text-gray-700">Expensive-looking movement, shine, and a wearable, polished silhouette.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-[#E7D8C7] bg-[#FAF7F4] px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C9A66B]">Blend</p>
                  <p className="mt-1 text-lg font-semibold text-[#5A2C3D]">Seamless</p>
                </div>
                <div className="rounded-2xl border border-[#E7D8C7] bg-[#FAF7F4] px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C9A66B]">Finish</p>
                  <p className="mt-1 text-lg font-semibold text-[#5A2C3D]">Glossy</p>
                </div>
                <div className="rounded-2xl border border-[#E7D8C7] bg-[#FAF7F4] px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C9A66B]">Mood</p>
                  <p className="mt-1 text-lg font-semibold text-[#5A2C3D]">Editorial</p>
                </div>
              </div>

              <Link to="/booking" className="mt-6 block">
                <button className="lux-button-primary w-full px-6 py-4 rounded-full font-semibold text-base shadow-lg">
                  Book the Transformation
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformations.slice(1).map((transformation) => (
              <motion.div key={transformation.title} className="group relative overflow-hidden rounded-[1.75rem] shadow-lg lux-card h-72 cursor-pointer" whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <ImageWithFallback
                  src={transformation.afterImage}
                  alt={transformation.title}
                  width={900}
                  height={700}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/78 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/80">Hover Reveal</p>
                  <h3 className="mt-1 text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {transformation.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90">{transformation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              Find a GlamFlow Salon
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Visit us in New York City, Orlando, or Miami. Book your appointment at the location nearest you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <motion.div key={loc.city} className="bg-[#F5EDE4] rounded-2xl p-6 flex flex-col items-center shadow-md lux-card h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <h3 className="text-2xl mb-2 lux-heading" style={{ color: '#5A2C3D' }}>{loc.city}</h3>
                <div className="flex items-center gap-2 mb-2 text-[#5A2C3D]">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 mb-2 text-[#5A2C3D]">
                  <Phone size={16} />
                  <span className="text-sm">{loc.phone}</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-[#5A2C3D]">
                  <Clock size={16} />
                  <span className="text-sm">{loc.hours}</span>
                </div>
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-[#E8B4BC]">
                  <iframe
                    src={loc.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={`Map of ${loc.city}`}
                  />
                </div>
                <Link to={loc.booking} className="w-full">
                  <button className="lux-button-primary w-full px-6 py-3 rounded-full font-semibold text-base shadow-md">
                    Book This Location
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm lux-kicker mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl mb-4 lux-heading" style={{ color: '#5A2C3D' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Everything you need to know about booking, services, and the GlamFlow experience.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <motion.div key={faq.q} className="bg-white rounded-2xl p-6 shadow lux-card" whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                <h3 className="text-lg font-semibold mb-2 lux-heading" style={{ color: '#5A2C3D' }}>{faq.q}</h3>
                <p className="text-gray-700 text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="py-24 px-4 bg-[#FAF7F4]">
        <div className="max-w-5xl mx-auto text-center rounded-[2rem] border border-[#E7D8C7] bg-white/90 px-6 sm:px-10 py-14 shadow-xl">
          <p className="text-sm lux-kicker mb-3">Your next appointment</p>
          <h2 className="text-3xl md:text-5xl mb-6 lux-heading" style={{ color: '#5A2C3D' }}>
            Ready for Your Transformation?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Step into a more polished hair experience. Book a consultation or reserve your service and let our stylists design a look that feels elevated, effortless, and completely yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <button className="bg-[#5A2C3D] text-white px-10 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl lux-button-primary">
                Book Your Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-white text-[#5A2C3D] px-10 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-md lux-button-secondary border border-[#C9A66B]">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}