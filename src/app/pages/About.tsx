import { Link } from 'react-router';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=1920"
            alt="Luxury salon interior"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/85 to-[#C9A66B]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Where Artistry Meets Elegance
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Founded on the belief that hair is art, GlamFlow has become America's most trusted destination for luxury salon experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-sm text-[#C9A66B] tracking-widest uppercase mb-3">Since 2015</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                GlamFlow was born from a vision to create more than just a salon — we set out to build a sanctuary where beauty, artistry, and luxury converge. What started as a single boutique location in Manhattan has blossomed into a prestigious collection of salons across New York, Orlando, and Miami.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our founders, master colorists with over 20 years of experience in Paris and Milan, brought European sophistication to the American beauty landscape. Today, we're proud to serve thousands of discerning clients who trust us with their most important transformations.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599332069800-fcf11ed035ff?w=800"
                alt="Salon interior"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[#C9A66B] tracking-widest uppercase mb-3">What We Believe</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/20 rounded-full mb-4">
                <Heart size={32} className="text-[#C9A66B]" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                Personalized Artistry
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe every client deserves a bespoke experience. Our consultations go beyond the surface, understanding your lifestyle, personality, and vision to create looks that are uniquely yours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/20 rounded-full mb-4">
                <Award size={32} className="text-[#C9A66B]" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                Uncompromising Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From our premium product lines to our continuous education programs, we invest in excellence. Our stylists train with industry leaders and use only the finest formulations available.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/20 rounded-full mb-4">
                <Sparkles size={32} className="text-[#C9A66B]" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                Luxury Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every visit should feel like an escape. Our spaces are designed for comfort and tranquility, complete with champagne service, plush amenities, and an atmosphere of refined elegance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A66B]/20 rounded-full mb-4">
                <Users size={32} className="text-[#C9A66B]" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                Community & Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're more than a salon — we're a community. Building lasting relationships with our clients and supporting each other creates an environment where everyone feels valued and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#C9A66B' }}>
                10+
              </div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#C9A66B' }}>
                30+
              </div>
              <p className="text-gray-600">Master Stylists</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#C9A66B' }}>
                15K+
              </div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#C9A66B' }}>
                3
              </div>
              <p className="text-gray-600">Luxury Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#5A2C3D] to-[#C9A66B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Fraunces, serif' }}>
            Experience the GlamFlow Difference
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Join thousands of clients who trust us with their beauty journey
          </p>
          <Link to="/booking">
            <button className="bg-white text-[#5A2C3D] px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#FAF7F4] transition-all duration-300 shadow-xl">
              Book Your Visit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

