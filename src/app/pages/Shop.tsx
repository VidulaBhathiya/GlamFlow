import { Link } from 'react-router';
import { ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../cart-context';

export default function Shop() {
  const { addItem, getItemQuantity } = useCart();

  const products = [
    {
      id: 'olaplex-no-3-hair-perfector',
      name: 'Olaplex No. 3 Hair Perfector',
      brand: 'Olaplex',
      price: '$30',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1763088160091-1c3dbb0d8bf8?w=400',
      description: 'Weekly at-home bond-building treatment'
    },
    {
      id: 'kerastase-elixir-ultime',
      name: 'Kérastase Elixir Ultime',
      brand: 'Kérastase',
      price: '$68',
      category: 'Hair Oil',
      image: 'https://images.unsplash.com/photo-1758788390320-16e1f280cf49?w=400',
      description: 'Luxurious finishing oil for all hair types'
    },
    {
      id: 'kevin-murphy-smooth-again',
      name: 'Kevin Murphy Smooth Again',
      brand: 'Kevin Murphy',
      price: '$42',
      category: 'Smoothing',
      image: 'https://images.unsplash.com/photo-1761125802333-d145773f4461?w=400',
      description: 'Anti-frizz smoothing treatment'
    },
    {
      id: 'oribe-gold-lust-shampoo',
      name: 'Oribe Gold Lust Shampoo',
      brand: 'Oribe',
      price: '$52',
      category: 'Shampoo',
      image: 'https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?w=400',
      description: 'Rejuvenating shampoo for healthy hair'
    },
    {
      id: 'living-proof-perfect-hair-day',
      name: 'Living Proof Perfect Hair Day',
      brand: 'Living Proof',
      price: '$32',
      category: 'Shampoo',
      image: 'https://images.unsplash.com/photo-1766101293873-41ef9c5f32b5?w=400',
      description: 'Advanced clean for all hair types'
    },
    {
      id: 'r-co-television-spray',
      name: 'R+Co Television Spray',
      brand: 'R+Co',
      price: '$34',
      category: 'Styling',
      image: 'https://images.unsplash.com/photo-1772987714654-2df39af2c658?w=400',
      description: 'Perfect texture spray with shine'
    },
    {
      id: 'olaplex-no-7-bonding-oil',
      name: 'Olaplex No. 7 Bonding Oil',
      brand: 'Olaplex',
      price: '$30',
      category: 'Hair Oil',
      image: 'https://images.unsplash.com/photo-1762651356493-c492ca111a07?w=400',
      description: 'Concentrated oil for heat protection'
    },
    {
      id: 'kerastase-resistance-mask',
      name: 'Kérastase Resistance Mask',
      brand: 'Kérastase',
      price: '$75',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1766101067640-b3ae41ba84bd?w=400',
      description: 'Intensive strengthening mask'
    },
    {
      id: 'kevin-murphy-session-spray',
      name: 'Kevin Murphy Session Spray',
      brand: 'Kevin Murphy',
      price: '$38',
      category: 'Hairspray',
      image: 'https://images.unsplash.com/photo-1767953802241-0c4876b84c2b?w=400',
      description: 'Flexible hold hairspray'
    },
  ];

  const categories = ['All', 'Shampoo', 'Treatment', 'Styling', 'Hair Oil', 'Hairspray'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758788390320-16e1f280cf49?w=1920"
            alt="Luxury products"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/90 to-[#5A2C3D]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Our Boutique</p>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Luxury Haircare
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Professional-grade products to maintain your salon-perfect results at home
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  index === 0
                    ? 'bg-[#5A2C3D] text-white'
                    : 'bg-[#F5EDE4] text-gray-700 hover:bg-[#C9A66B] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-[#F5EDE4]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#5A2C3D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => addItem(product)}
                      className="bg-white text-[#5A2C3D] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#C9A66B] hover:text-white transition-colors"
                    >
                      <ShoppingBag size={20} />
                      {getItemQuantity(product.id) > 0 ? 'Add Another' : 'Add to Cart'}
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm text-gray-600">{product.category}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[#C9A66B] text-sm font-semibold mb-1">{product.brand}</p>
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#2d2d2d' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <p className="text-2xl font-bold" style={{ color: '#5A2C3D' }}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[#C9A66B] tracking-widest uppercase mb-3">Curated Selection</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
              Featured Brands
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We exclusively carry the finest professional haircare brands trusted by stylists worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Olaplex', 'Kérastase', 'Kevin Murphy', 'Oribe', 'Living Proof', 'R+Co', 'Bumble and Bumble', 'Moroccanoil'].map((brand, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-xl font-semibold" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Free Shipping</h3>
              <p className="text-gray-600">On orders over $75</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>100% Authentic</h3>
              <p className="text-gray-600">Guaranteed genuine products</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>Samples Included</h3>
              <p className="text-gray-600">With every purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#5A2C3D] to-[#C9A66B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Fraunces, serif' }}>
            Not Sure What to Buy?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Ask your stylist for personalized product recommendations
          </p>
          <Link to="/booking">
            <button className="bg-white text-[#5A2C3D] px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#FAF7F4] transition-all duration-300 shadow-xl">
              Book Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

