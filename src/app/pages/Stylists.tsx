import { Link } from 'react-router';
import { Instagram, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Stylists() {
  const stylists = [
    {
      name: 'Sophia Rivera',
      title: 'Master Colorist & Co-Founder',
      specialty: 'Balayage, Color Correction',
      bio: 'With over 20 years of experience training in Paris and Milan, Sophia brings European artistry to every service. Specializing in natural-looking balayage and complex color corrections.',
      image: 'https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?w=600',
      instagram: '@sophiarivera',
      awards: ['Goldwell Color Master', 'NYC Stylist of the Year 2024']
    },
    {
      name: 'Elena Martinez',
      title: 'Extension Specialist',
      specialty: 'Hair Extensions, Volume',
      bio: 'Elena is our extension expert with certification in tape-in, hand-tied, and keratin bond methods. Her meticulous attention to detail ensures seamless, natural results.',
      image: 'https://images.unsplash.com/photo-1706607321814-7cab2f6dea85?w=600',
      instagram: '@elenamartinez',
      awards: ['NBR Certified', 'Extension Excellence Award']
    },
    {
      name: 'Isabella Chen',
      title: 'Precision Cut Specialist',
      specialty: 'Haircuts, Styling',
      bio: 'Trained at Vidal Sassoon Academy, Isabella creates cuts that enhance your natural features. Her precision and creativity have earned her a devoted following.',
      image: 'https://images.unsplash.com/photo-1636908681421-bff3b85f7303?w=600',
      instagram: '@isabellachen',
      awards: ['Sassoon Academy Graduate', 'Best Cut 2025']
    },
    {
      name: 'Aria Thompson',
      title: 'Bridal & Editorial Stylist',
      specialty: 'Bridal, Special Events',
      bio: 'Aria has styled for Fashion Week and countless weddings. Her elegant updos and timeless styling make every client feel like royalty on their special day.',
      image: 'https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=600',
      instagram: '@ariathompson',
      awards: ['NYC Bridal Stylist Award', 'Fashion Week Artist']
    },
    {
      name: 'Maya Rodriguez',
      title: 'Color Specialist',
      specialty: 'Vivid Color, Blonding',
      bio: 'Maya specializes in fashion colors and platinum transformations. Her artistic vision and technical expertise create stunning, vibrant results.',
      image: 'https://images.unsplash.com/photo-1674243139040-b01638753c9e?w=600',
      instagram: '@mayarodriguez',
      awards: ['Pulp Riot Artist', 'Color Innovation Award']
    },
    {
      name: 'Lucas Anderson',
      title: 'Texture & Curl Specialist',
      specialty: 'Curly Hair, Texture',
      bio: 'Lucas is our curl expert, certified in Deva cutting techniques. He celebrates natural texture and creates cuts that enhance every curl pattern.',
      image: 'https://images.unsplash.com/photo-1657180976317-8bcaf57389e3?w=600',
      instagram: '@lucasanderson',
      awards: ['DevaCurl Certified', 'Texture Expert']
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1599332069800-fcf11ed035ff?w=1920"
            alt="Stylist"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/90 to-[#5A2C3D]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Our Team</p>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Meet Our Master Stylists
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Award-winning artists dedicated to bringing your hair vision to life
          </p>
        </div>
      </section>

      {/* Stylists Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.map((stylist, index) => (
              <div key={index} className="group">
                <div className="relative h-[500px] overflow-hidden rounded-2xl mb-6">
                  <ImageWithFallback
                    src={stylist.image}
                    alt={stylist.name}
                    width={600}
                    height={800}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A2C3D]/90 via-[#5A2C3D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <a
                      href={`https://instagram.com/${stylist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white flex items-center gap-2 mb-4 hover:text-[#C9A66B] transition-colors"
                    >
                      <Instagram size={20} />
                      <span>{stylist.instagram}</span>
                    </a>
                    <Link to="/booking">
                      <button className="bg-white text-[#5A2C3D] px-6 py-3 rounded-full font-semibold hover:bg-[#C9A66B] hover:text-white transition-colors">
                        Book with {stylist.name.split(' ')[0]}
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-1" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                    {stylist.name}
                  </h3>
                  <p className="text-[#C9A66B] font-semibold mb-2">{stylist.title}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Specialties:</span> {stylist.specialty}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {stylist.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stylist.awards.map((award, awardIndex) => (
                      <span
                        key={awardIndex}
                        className="inline-flex items-center gap-1 bg-[#F5EDE4] text-xs px-3 py-1 rounded-full text-gray-700"
                      >
                        <Award size={12} className="text-[#C9A66B]" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
            Ready to Book Your Stylist?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Select your preferred stylist during the booking process
          </p>
          <Link to="/booking">
            <button className="bg-[#C9A66B] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#5A2C3D] transition-all duration-300 shadow-lg">
              Book Appointment
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

