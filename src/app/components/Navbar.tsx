import { memo, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, ShoppingCart, X } from 'lucide-react';
import CartDrawer from './CartDrawer';
import { useCart } from '../cart-context';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, openCart } = useCart();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Stylists', path: '/stylists' },
    { name: 'Shop', path: '/shop' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAF7F4]/95 shadow-sm backdrop-blur-md' : 'bg-[#FAF7F4]/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl xs:text-3xl tracking-wide" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D', fontWeight: 600 }}>
              GlamFlow
            </h1>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base transition-colors px-2 py-2 rounded-full ${
                  location.pathname === link.path
                    ? 'text-[#5A2C3D] font-semibold bg-[#C9A66B]/10' : 'text-gray-700 hover:text-[#C9A66B] hover:bg-[#C9A66B]/10'
                }`}
                style={{ minWidth: 48, minHeight: 48, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              <Link to="/booking">
                <button className="bg-[#C9A66B] text-white px-6 sm:px-8 py-3 rounded-full text-base font-semibold lux-button-primary shadow-md" style={{ minHeight: 48, minWidth: 48 }}>
                  Book Appointment
                </button>
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center justify-center rounded-full border border-[#C9A66B]/30 bg-white text-[#5A2C3D] shadow-sm transition-all duration-300 hover:border-[#C9A66B] hover:text-[#C9A66B] hover:shadow-md"
                aria-label={`Open cart with ${cartCount} item${cartCount === 1 ? '' : 's'}`}
                style={{ minHeight: 48, minWidth: 48 }}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 ? (
                  <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-[#5A2C3D] px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white shadow-sm">
                    {cartCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] transition-all"
              aria-label="Toggle menu"
              style={{ minWidth: 48, minHeight: 48 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-[#FAF7F4] shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
        style={{ minHeight: '100vh' }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full p-6 gap-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl tracking-wide" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D', fontWeight: 600 }}>
              GlamFlow
            </h1>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
              aria-label="Close menu"
              style={{ minWidth: 40, minHeight: 40 }}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg px-4 py-3 rounded-full transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#5A2C3D] font-semibold bg-[#C9A66B]/10' : 'text-gray-700 hover:text-[#C9A66B] hover:bg-[#C9A66B]/10'
                }`}
                style={{ minHeight: 48, minWidth: 48 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <Link to="/booking" className="flex-1">
              <button className="w-full bg-[#C9A66B] text-white px-6 py-4 rounded-full text-lg font-semibold shadow-md" style={{ minHeight: 56 }}>
                Book Appointment
              </button>
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex items-center justify-center rounded-full border border-[#C9A66B]/30 bg-white text-[#5A2C3D] shadow-sm transition-all duration-300 hover:border-[#C9A66B] hover:text-[#C9A66B] hover:shadow-md"
              aria-label={`Open cart with ${cartCount} item${cartCount === 1 ? '' : 's'}`}
              style={{ minHeight: 56, minWidth: 56 }}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-[#5A2C3D] px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white shadow-sm">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
      <CartDrawer />
    </nav>
  );
}

export default memo(Navbar);

