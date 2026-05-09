import { Outlet, Link } from 'react-router';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div className="w-full bg-[#FAF7F4] antialiased" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="fixed inset-x-4 bottom-4 z-50 pointer-events-none lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="pointer-events-auto"
        >
          <Link to="/booking" className="block">
            <button className="w-full rounded-full bg-[#5A2C3D] px-5 py-4 text-base font-semibold text-white shadow-2xl shadow-[#5A2C3D]/25">
              Book Appointment
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
