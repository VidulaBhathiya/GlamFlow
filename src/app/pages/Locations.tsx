import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Locations() {
  const locations = [
    {
      name: 'GlamFlow Manhattan',
      address: '123 Madison Avenue',
      city: 'New York, NY 10016',
      phone: '(212) 555-GLAM',
      email: 'manhattan@glamflow.com',
      hours: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 8:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 6:00 PM'
      ],
      image: 'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=800',
      description: 'Our flagship location in the heart of Manhattan, featuring 15 styling stations and a private bridal suite.',
    },
    {
      name: 'GlamFlow Orlando',
      address: '456 Park Avenue',
      city: 'Orlando, FL 32801',
      phone: '(407) 555-GLAM',
      email: 'orlando@glamflow.com',
      hours: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 8:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 6:00 PM'
      ],
      image: 'https://images.unsplash.com/photo-1599332069800-fcf11ed035ff?w=800',
      description: 'A stunning space in downtown Orlando with luxury amenities and complimentary valet parking.',
    },
    {
      name: 'GlamFlow Miami',
      address: '789 Ocean Drive',
      city: 'Miami, FL 33139',
      phone: '(305) 555-GLAM',
      email: 'miami@glamflow.com',
      hours: [
        'Monday - Friday: 9:00 AM - 9:00 PM',
        'Saturday: 8:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 7:00 PM'
      ],
      image: 'https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?w=800',
      description: 'Our newest location on iconic Ocean Drive, offering beachside luxury and exclusive VIP services.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=1920"
            alt="Salon location"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/90 to-[#5A2C3D]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Visit Us</p>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Our Locations
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Three luxury salons across America's most vibrant cities
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {locations.map((location, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <ImageWithFallback
                  src={location.image}
                  alt={location.name}
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                  {location.name}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {location.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{location.address}</p>
                      <p className="text-gray-700">{location.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#C9A66B] flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#C9A66B] flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                    <div>
                      {location.hours.map((hours, hourIndex) => (
                        <p key={hourIndex} className="text-gray-700">{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <button className="bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold">
                      Book at This Location
                    </button>
                  </Link>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ' ' + location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-2 border-[#5A2C3D] text-[#5A2C3D] px-8 py-4 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold">
                      Get Directions
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[#C9A66B] tracking-widest uppercase mb-3">What to Expect</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
              Luxury Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🥂</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Complimentary Beverages</h3>
              <p className="text-gray-600">Champagne, specialty coffee, and herbal teas</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🅿️</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Valet Parking</h3>
              <p className="text-gray-600">Complimentary valet service at all locations</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Free WiFi</h3>
              <p className="text-gray-600">High-speed internet and charging stations</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💆</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Spa Amenities</h3>
              <p className="text-gray-600">Luxury robes and comfortable seating</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛍️</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Retail Boutique</h3>
              <p className="text-gray-600">Premium products available for purchase</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>VIP Suites</h3>
              <p className="text-gray-600">Private rooms for bridal and special events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#5A2C3D] to-[#C9A66B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Fraunces, serif' }}>
            Visit Us Today
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Experience luxury at any of our three stunning locations
          </p>
          <Link to="/booking">
            <button className="bg-white text-[#5A2C3D] px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#FAF7F4] transition-all duration-300 shadow-xl">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

