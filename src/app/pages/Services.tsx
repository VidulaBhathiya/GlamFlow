import { Link } from 'react-router';
import { Clock, DollarSign } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const serviceCategories = [
    {
      category: 'Hair Color',
      description: 'Transform your look with our expert color services',
      services: [
        { name: 'Full Balayage', price: '$380 - $580', duration: '3-4 hours', description: 'Hand-painted highlights for natural dimension' },
        { name: 'Partial Balayage', price: '$280 - $380', duration: '2-3 hours', description: 'Face-framing highlights' },
        { name: 'Full Color', price: '$195 - $295', duration: '2-3 hours', description: 'Complete color transformation' },
        { name: 'Root Touch-Up', price: '$145 - $195', duration: '1.5-2 hours', description: 'Refresh your roots seamlessly' },
        { name: 'Color Correction', price: 'From $500', duration: '4-6 hours', description: 'Fix and transform previous color' },
        { name: 'Gloss Treatment', price: '$85 - $125', duration: '45 min', description: 'Shine-enhancing toner' },
      ],
      image: 'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=800'
    },
    {
      category: 'Hair Extensions',
      description: 'Add length and volume with premium extensions',
      services: [
        { name: 'Tape-In Extensions', price: '$800 - $1,800', duration: '2-3 hours', description: 'Seamless, natural-looking extensions' },
        { name: 'Keratin Bond Extensions', price: '$1,200 - $2,500', duration: '3-4 hours', description: 'Long-lasting bonded extensions' },
        { name: 'Hand-Tied Extensions', price: '$1,500 - $3,000', duration: '4-5 hours', description: 'Ultra-lightweight weft extensions' },
        { name: 'Extension Maintenance', price: '$200 - $400', duration: '1-2 hours', description: 'Move-up and adjustment' },
        { name: 'Extension Removal', price: '$150 - $250', duration: '1 hour', description: 'Professional safe removal' },
      ],
      image: 'https://images.unsplash.com/photo-1554519880-ffe46861d570?w=800'
    },
    {
      category: 'Haircuts & Styling',
      description: 'Precision cuts tailored to your features',
      services: [
        { name: 'Women\'s Haircut', price: '$145 - $225', duration: '1 hour', description: 'Expert cut with consultation' },
        { name: 'Men\'s Haircut', price: '$85 - $125', duration: '45 min', description: 'Precision grooming and styling' },
        { name: 'Bang Trim', price: '$45', duration: '15 min', description: 'Quick fringe refresh' },
        { name: 'Blowout', price: '$75 - $95', duration: '45 min', description: 'Luxury blowdry and style' },
        { name: 'Special Event Styling', price: '$125 - $250', duration: '1.5 hours', description: 'Formal updo or styling' },
      ],
      image: 'https://images.unsplash.com/photo-1616970093325-7f40f58e0561?w=800'
    },
    {
      category: 'Treatments',
      description: 'Restore and revitalize your hair',
      services: [
        { name: 'Brazilian Blowout', price: '$350 - $450', duration: '2-3 hours', description: 'Smoothing keratin treatment' },
        { name: 'Keratin Treatment', price: '$400 - $550', duration: '3 hours', description: 'Deep smoothing therapy' },
        { name: 'Olaplex Treatment', price: '$85 - $125', duration: '30 min', description: 'Bond-building repair' },
        { name: 'Deep Conditioning', price: '$65 - $95', duration: '30 min', description: 'Intensive moisture therapy' },
        { name: 'Scalp Treatment', price: '$75 - $115', duration: '45 min', description: 'Detox and nourishment' },
      ],
      image: 'https://images.unsplash.com/photo-1583919976579-9ec4a0051fe6?w=800'
    },
    {
      category: 'Bridal & Events',
      description: 'Look flawless on your special day',
      services: [
        { name: 'Bridal Hair Trial', price: '$150', duration: '1.5 hours', description: 'Perfect your wedding look' },
        { name: 'Bridal Hair - Day Of', price: '$250 - $400', duration: '2 hours', description: 'Wedding day styling' },
        { name: 'Bridal Makeup', price: '$200 - $300', duration: '1.5 hours', description: 'Professional makeup artistry' },
        { name: 'Bridal Party Hair (per person)', price: '$125', duration: '1 hour', description: 'Bridesmaids styling' },
        { name: 'Complete Bridal Package', price: 'From $2,500', duration: 'Full day', description: 'Hair, makeup, and party' },
      ],
      image: 'https://images.unsplash.com/photo-1583743599150-3b6048ecf084?w=800'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?w=1920"
            alt="Luxury salon"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/90 to-[#5A2C3D]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Our Expertise</p>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Luxury Hair Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Indulge in our curated collection of premium treatments, performed by master stylists
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`mb-20 ${categoryIndex !== serviceCategories.length - 1 ? 'pb-20 border-b border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="sticky top-32">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.category}
                      width={800}
                      height={1000}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="rounded-2xl shadow-lg mb-6 w-full h-[400px] object-cover"
                    />
                    <h2 className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                      {category.category}
                    </h2>
                    <p className="text-gray-600 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-[#FAF7F4] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                          {service.name}
                        </h3>
                        <span className="text-[#C9A66B] font-bold text-xl whitespace-nowrap ml-4">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={16} />
                          <span>{service.duration}</span>
                        </div>
                        <Link to="/booking">
                          <button className="bg-[#5A2C3D] text-white px-6 py-2 rounded-full hover:bg-[#C9A66B] transition-colors text-sm font-semibold">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
            Not Sure Which Service?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Book a complimentary consultation with one of our expert stylists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <button className="bg-[#C9A66B] text-white px-10 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold">
                Book Consultation
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-[#5A2C3D] text-[#5A2C3D] px-10 py-4 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

