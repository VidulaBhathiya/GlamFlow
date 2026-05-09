import { useCallback, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1636908681421-bff3b85f7303?w=1920"
            alt="Contact us"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A2C3D]/90 to-[#5A2C3D]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Reach out with any questions or inquiries
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
                  Thank you! We've received your message and will be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A66B] focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A66B] focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A66B] focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/20 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A66B] focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/20 transition-colors"
                  >
                    <option value="">Select a location</option>
                    <option value="manhattan">Manhattan</option>
                    <option value="orlando">Orlando</option>
                    <option value="miami">Miami</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A66B] focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/20 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Manhattan */}
                <div className="bg-[#F5EDE4] rounded-2xl p-6">
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>GlamFlow Manhattan</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">123 Madison Avenue</p>
                        <p className="text-gray-700">New York, NY 10016</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="tel:(212) 555-GLAM" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        (212) 555-GLAM
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="mailto:manhattan@glamflow.com" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        manhattan@glamflow.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                      <div className="text-gray-700 text-sm">
                        <p>Mon-Fri: 9AM - 8PM</p>
                        <p>Sat: 8AM - 7PM</p>
                        <p>Sun: 10AM - 6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orlando */}
                <div className="bg-[#F5EDE4] rounded-2xl p-6">
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>GlamFlow Orlando</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">456 Park Avenue</p>
                        <p className="text-gray-700">Orlando, FL 32801</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="tel:(407) 555-GLAM" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        (407) 555-GLAM
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="mailto:orlando@glamflow.com" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        orlando@glamflow.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Miami */}
                <div className="bg-[#F5EDE4] rounded-2xl p-6">
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>GlamFlow Miami</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#C9A66B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">789 Ocean Drive</p>
                        <p className="text-gray-700">Miami, FL 33139</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="tel:(305) 555-GLAM" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        (305) 555-GLAM
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-[#C9A66B] flex-shrink-0" />
                      <a href="mailto:miami@glamflow.com" className="text-gray-700 hover:text-[#C9A66B] transition-colors">
                        miami@glamflow.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Fraunces, serif' }}>What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We require 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Fraunces, serif' }}>Do you offer consultations?</h3>
              <p className="text-gray-600">
                Yes! We offer complimentary 15-minute consultations before any service. For in-depth consultations, we recommend booking a full appointment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Fraunces, serif' }}>What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, cash, and digital payment methods. Gratuity can be added to your card or given in cash.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Fraunces, serif' }}>Can I request a specific stylist?</h3>
              <p className="text-gray-600">
                Absolutely! You can select your preferred stylist when booking online or request them when calling to book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

