import { useCallback, useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, ChevronRight, ChevronLeft, Calendar, Clock, User, MapPin, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type BookingField = 'service' | 'stylist' | 'location' | 'date' | 'time' | 'name' | 'email' | 'phone';

type BookingErrors = Partial<Record<BookingField, string>>;

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isStepLoading, setIsStepLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<BookingErrors>({});

  const [bookingData, setBookingData] = useState({
    service: '',
    stylist: '',
    location: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const steps = [
    { id: 1, label: 'Service', helper: 'Choose treatment' },
    { id: 2, label: 'Stylist', helper: 'Artist + location' },
    { id: 3, label: 'Schedule', helper: 'Date and time' },
    { id: 4, label: 'Details', helper: 'Contact info' },
  ] as const;

  const services = [
    { id: 'consultation', name: 'Consultation', price: '$10 - $50', duration: '1 hour' },
    { id: 'balayage', name: 'Full Balayage', price: '$380 - $580', duration: '3-4 hours' },
    { id: 'partial-balayage', name: 'Partial Balayage', price: '$280 - $380', duration: '2-3 hours' },
    { id: 'color', name: 'Full Color', price: '$195 - $295', duration: '2-3 hours' },
    { id: 'extensions-tape', name: 'Tape-In Extensions', price: '$800 - $1,800', duration: '2-3 hours' },
    { id: 'extensions-keratin', name: 'Keratin Bond Extensions', price: '$1,200 - $2,500', duration: '3-4 hours' },
    { id: 'haircut-women', name: "Women's Haircut", price: '$145 - $225', duration: '1 hour' },
    { id: 'haircut-men', name: "Men's Haircut", price: '$85 - $125', duration: '45 min' },
    { id: 'keratin', name: 'Keratin Treatment', price: '$400 - $550', duration: '3 hours' },
    { id: 'bridal', name: 'Bridal Hair - Day Of', price: '$250 - $400', duration: '2 hours' },
  ];

  const stylists = [
    { id: 'sophia', name: 'Sophia Rivera', title: 'Master Colorist', image: 'https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?w=200' },
    { id: 'elena', name: 'Elena Martinez', title: 'Extension Specialist', image: 'https://images.unsplash.com/photo-1706607321814-7cab2f6dea85?w=200' },
    { id: 'isabella', name: 'Isabella Chen', title: 'Precision Cut Specialist', image: 'https://images.unsplash.com/photo-1636908681421-bff3b85f7303?w=200' },
    { id: 'aria', name: 'Aria Thompson', title: 'Bridal Stylist', image: 'https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=200' },
    { id: 'maya', name: 'Maya Rodriguez', title: 'Color Specialist', image: 'https://images.unsplash.com/photo-1674243139040-b01638753c9e?w=200' },
    { id: 'lucas', name: 'Lucas Anderson', title: 'Texture Specialist', image: 'https://images.unsplash.com/photo-1657180976317-8bcaf57389e3?w=200' },
  ];

  const locations = [
    { id: 'manhattan', name: 'GlamFlow Manhattan', address: '123 Madison Ave, NYC' },
    { id: 'orlando', name: 'GlamFlow Orlando', address: '456 Park Ave, Orlando' },
    { id: 'miami', name: 'GlamFlow Miami', address: '789 Ocean Dr, Miami' },
  ];

  const timeSlots = useMemo(
    () => [
      { time: '9:00 AM', period: 'Morning', available: true },
      { time: '10:00 AM', period: 'Morning', available: true },
      { time: '11:00 AM', period: 'Morning', available: true },
      { time: '12:00 PM', period: 'Afternoon', available: true },
      { time: '1:00 PM', period: 'Afternoon', available: false },
      { time: '2:00 PM', period: 'Afternoon', available: true },
      { time: '3:00 PM', period: 'Afternoon', available: true },
      { time: '4:00 PM', period: 'Afternoon', available: false },
      { time: '5:00 PM', period: 'Evening', available: true },
      { time: '6:00 PM', period: 'Evening', available: true },
      { time: '7:00 PM', period: 'Evening', available: true },
    ],
    [],
  );

  const groupedSlots = useMemo(
    () =>
      timeSlots.reduce<Record<string, typeof timeSlots>>((acc, slot) => {
        if (!acc[slot.period]) {
          acc[slot.period] = [];
        }
        acc[slot.period].push(slot);
        return acc;
      }, {}),
    [timeSlots],
  );

  const progressPercent = Math.min(step, 4) * 25;

  const selectedService = services.find((s) => s.id === bookingData.service);
  const selectedStylist = stylists.find((s) => s.id === bookingData.stylist);
  const selectedLocation = locations.find((l) => l.id === bookingData.location);

  useEffect(() => {
    if (step !== 5) return;

    const endTime = Date.now() + 1700;
    const colors = ['#C9A66B', '#5A2C3D', '#F5EDE4'];

    const run = () => {
      confetti({
        particleCount: 4,
        startVelocity: 28,
        spread: 70,
        origin: { x: 0.1, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        startVelocity: 28,
        spread: 70,
        origin: { x: 0.9, y: 0.7 },
        colors,
      });

      if (Date.now() < endTime) {
        requestAnimationFrame(run);
      }
    };

    run();
  }, [step]);

  const simulateStepTransition = useCallback(async () => {
    setIsStepLoading(true);
    await new Promise<void>((resolve) => {
      window.setTimeout(() => resolve(), 350);
    });
    setIsStepLoading(false);
  }, []);

  const updateBookingField = useCallback((field: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      if (!prev[field as BookingField]) return prev;
      const next = { ...prev };
      delete next[field as BookingField];
      return next;
    });
  }, []);

  const validateStep = useCallback(
    (currentStep: number): boolean => {
      const nextErrors: BookingErrors = {};

      if (currentStep === 1 && !bookingData.service) {
        nextErrors.service = 'Please choose a service.';
      }

      if (currentStep === 2) {
        if (!bookingData.location) {
          nextErrors.location = 'Please choose a location.';
        }
        if (!bookingData.stylist) {
          nextErrors.stylist = 'Please choose a stylist.';
        }
      }

      if (currentStep === 3) {
        if (!bookingData.date) {
          nextErrors.date = 'Please select a date.';
        }
        if (!bookingData.time) {
          nextErrors.time = 'Please select a time slot.';
        }
      }

      if (currentStep === 4) {
        if (!bookingData.name.trim() || bookingData.name.trim().length < 2) {
          nextErrors.name = 'Please enter your full name.';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email.trim())) {
          nextErrors.email = 'Please enter a valid email address.';
        }

        const phoneDigits = bookingData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
          nextErrors.phone = 'Please enter a valid phone number.';
        }
      }

      setErrors(nextErrors);
      return Object.keys(nextErrors).length === 0;
    },
    [bookingData],
  );

  const goNextStep = useCallback(async () => {
    if (!validateStep(step)) return;
    await simulateStepTransition();
    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  }, [simulateStepTransition, step, validateStep]);

  const prevStep = useCallback(() => {
    if (isStepLoading || isSubmitting) return;
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  }, [isStepLoading, isSubmitting]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateStep(4)) return;

      setIsSubmitting(true);
      await new Promise<void>((resolve) => {
        window.setTimeout(() => resolve(), 1000);
      });
      setIsSubmitting(false);
      setStep(5);
    },
    [validateStep],
  );

  const handleSelectService = useCallback((serviceId: string) => updateBookingField('service', serviceId), [updateBookingField]);
  const handleSelectLocation = useCallback((locationId: string) => updateBookingField('location', locationId), [updateBookingField]);
  const handleSelectStylist = useCallback((stylistId: string) => updateBookingField('stylist', stylistId), [updateBookingField]);
  const handleSelectDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => updateBookingField('date', e.target.value), [updateBookingField]);
  const handleSelectTime = useCallback((time: string) => updateBookingField('time', time), [updateBookingField]);
  const handleInputChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateBookingField(field, e.target.value),
    [updateBookingField],
  );

  const ctaLabel = isStepLoading ? 'Saving...' : 'Continue';

  return (
    <div className="pt-20 min-h-screen bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 py-6 md:py-12">
        <div className="mb-8 rounded-2xl md:rounded-3xl border border-[#C9A66B]/30 bg-white p-4 xs:p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-2 xs:gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B]">Booking Progress</p>
              <h2 className="text-lg xs:text-xl md:text-2xl" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Step {Math.min(step, 4)} of 4
              </h2>
            </div>
            <p className="text-sm text-gray-600">{progressPercent}% complete</p>
          </div>

          <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-[#F5EDE4]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#C9A66B] to-[#5A2C3D] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {steps.map((item) => {
              const isComplete = step > item.id;
              const isCurrent = step === item.id;

              return (
                <div
                  key={item.id}
                  className={`min-w-[150px] rounded-xl border px-3 py-3 transition-all ${
                    isComplete
                      ? 'border-[#C9A66B] bg-[#C9A66B]/10'
                      : isCurrent
                        ? 'border-[#5A2C3D] bg-[#5A2C3D]/5'
                        : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                        isComplete || isCurrent ? 'bg-[#5A2C3D] text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {isComplete ? <Check size={14} /> : item.id}
                    </span>
                    <p className="text-sm font-semibold text-[#2d2d2d]">{item.label}</p>
                  </div>
                  <p className="text-xs text-gray-500">{item.helper}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-[#C9A66B]/20 bg-white p-5 shadow-xl md:p-10">
          {step === 1 && (
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Select Your Service
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8">Choose the service you would like to book.</p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelectService(service.id)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all ${
                      bookingData.service === service.id
                        ? 'border-[#C9A66B] bg-[#C9A66B]/10 shadow-sm'
                        : 'border-gray-200 hover:border-[#C9A66B]/60 hover:-translate-y-0.5'
                    }`}
                  >
                    <h4 className="text-xl mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                      {service.name}
                    </h4>
                    <p className="text-[#C9A66B] font-semibold mb-1">{service.price}</p>
                    <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                  </button>
                ))}
              </div>
              {errors.service && <p className="mt-3 text-sm text-red-600">{errors.service}</p>}

              <div className="mt-8 flex justify-end">
                <button
                  onClick={goNextStep}
                  disabled={isStepLoading}
                  className="w-full sm:w-auto bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70 text-base xs:text-lg"
                >
                  {isStepLoading ? <Loader2 size={18} className="animate-spin" /> : null}
                  {ctaLabel}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Choose Stylist and Location
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8">Select your preferred salon and stylist.</p>

              <div className="mb-8">
                <h4 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Location</h4>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => handleSelectLocation(location.id)}
                      className={`p-4 rounded-2xl border-2 transition-all text-left ${
                        bookingData.location === location.id
                          ? 'border-[#C9A66B] bg-[#C9A66B]/10'
                          : 'border-gray-200 hover:border-[#C9A66B]/60'
                      }`}
                    >
                      <MapPin size={20} className="text-[#C9A66B] mb-2" />
                      <h5 className="font-semibold mb-1">{location.name}</h5>
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </button>
                  ))}
                </div>
                {errors.location && <p className="mt-3 text-sm text-red-600">{errors.location}</p>}
              </div>

              <div>
                <h4 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Stylist</h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                  {stylists.map((stylist) => (
                    <button
                      key={stylist.id}
                      onClick={() => handleSelectStylist(stylist.id)}
                      className={`p-4 rounded-2xl border-2 transition-all text-left ${
                        bookingData.stylist === stylist.id
                          ? 'border-[#C9A66B] bg-[#C9A66B]/10'
                          : 'border-gray-200 hover:border-[#C9A66B]/60'
                      }`}
                    >
                      <ImageWithFallback
                        src={stylist.image}
                        alt={stylist.name}
                        width={200}
                        height={128}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 42vw, 100vw"
                        className="w-full h-36 object-cover rounded-xl mb-3"
                      />
                      <h5 className="font-semibold">{stylist.name}</h5>
                      <p className="text-sm text-gray-600">{stylist.title}</p>
                    </button>
                  ))}
                </div>
                {errors.stylist && <p className="mt-3 text-sm text-red-600">{errors.stylist}</p>}
              </div>

              <div className="mt-8 flex flex-col-reverse gap-2 xs:gap-3 sm:flex-row sm:justify-between">
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto border-2 border-[#5A2C3D] text-[#5A2C3D] px-8 py-4 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 text-base xs:text-lg"
                >
                  <ChevronLeft size={20} /> Back
                </button>
                <button
                  onClick={goNextStep}
                  disabled={isStepLoading}
                  className="w-full sm:w-auto bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70 text-base xs:text-lg"
                >
                  {isStepLoading ? <Loader2 size={18} className="animate-spin" /> : null}
                  {ctaLabel}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Select Date and Time
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8">Pick your preferred appointment slot.</p>

              <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.6fr] gap-6">
                <div className="rounded-2xl border border-[#C9A66B]/30 bg-[#FAF7F4] p-5">
                  <h4 className="text-lg mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-[#C9A66B]" />
                    Appointment Date
                  </h4>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={handleSelectDate}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white ${
                      errors.date ? 'border-red-400' : 'border-gray-200'
                    } focus:border-[#C9A66B] focus:outline-none`}
                  />
                  {errors.date ? <p className="mt-2 text-sm text-red-600">{errors.date}</p> : <p className="mt-2 text-xs text-gray-500">Choose a date to view available slots.</p>}
                </div>

                <div className="rounded-2xl border border-[#C9A66B]/30 bg-white p-5">
                  <h4 className="text-lg mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#C9A66B]" />
                    Available Time Slots
                  </h4>

                  <div className="space-y-4">
                    {Object.entries(groupedSlots).map(([period, slots]) => (
                      <div key={period}>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#5A2C3D] mb-2">{period}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {slots.map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => slot.available && handleSelectTime(slot.time)}
                              disabled={!slot.available}
                              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                !slot.available
                                  ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : bookingData.time === slot.time
                                    ? 'border-[#C9A66B] bg-[#C9A66B]/10 text-[#5A2C3D]'
                                    : 'border-gray-200 hover:border-[#C9A66B]/60'
                              }`}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.time && <p className="mt-3 text-sm text-red-600">{errors.time}</p>}
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto border-2 border-[#5A2C3D] text-[#5A2C3D] px-8 py-4 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={20} /> Back
                </button>
                <button
                  onClick={goNextStep}
                  disabled={isStepLoading}
                  className="w-full sm:w-auto bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isStepLoading ? <Loader2 size={18} className="animate-spin" /> : null}
                  {ctaLabel}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Your Information
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8">Please provide your details to confirm your booking.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={handleInputChange('name')}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-[#C9A66B] focus:outline-none`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={handleInputChange('email')}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-[#C9A66B] focus:outline-none`}
                      placeholder="you@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={bookingData.phone}
                    onChange={handleInputChange('phone')}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.phone ? 'border-red-400' : 'border-gray-200'} focus:border-[#C9A66B] focus:outline-none`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests or Notes</label>
                  <textarea
                    value={bookingData.notes}
                    onChange={handleInputChange('notes')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A66B] focus:outline-none resize-none"
                    placeholder="Any allergies, preferences, or special requests..."
                  />
                </div>

                <div className="rounded-2xl border border-[#C9A66B]/25 bg-[#FAF7F4] p-4 text-sm text-gray-700">
                  You are booking <span className="font-semibold text-[#5A2C3D]">{selectedService?.name ?? 'a service'}</span> with{' '}
                  <span className="font-semibold text-[#5A2C3D]">{selectedStylist?.name ?? 'your stylist'}</span> at{' '}
                  <span className="font-semibold text-[#5A2C3D]">{selectedLocation?.name ?? 'your chosen location'}</span>.
                </div>

                <div className="pt-2 flex flex-col-reverse gap-2 xs:gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto border-2 border-[#5A2C3D] text-[#5A2C3D] px-8 py-4 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 text-base xs:text-lg"
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#C9A66B] text-white px-8 py-4 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70 text-base xs:text-lg"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : null}
                    {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-4 xs:py-6 md:py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Check size={40} className="text-green-600" />
              </div>

              <h3 className="text-4xl mb-4" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                Booking Confirmed
              </h3>
              <p className="text-gray-600 text-lg mb-6">A confirmation has been sent to {bookingData.email}.</p>

              <div className="bg-[#F5EDE4] rounded-2xl p-4 xs:p-5 md:p-8 max-w-2xl mx-auto text-left mb-8">
                <h4 className="text-2xl mb-6" style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
                  Appointment Details
                </h4>

                <div className="space-y-4">
                  <div className="flex justify-between gap-3 border-b border-gray-300 pb-3">
                    <span className="text-gray-600">Service</span>
                    <span className="font-semibold text-right">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-gray-300 pb-3">
                    <span className="text-gray-600">Stylist</span>
                    <span className="font-semibold text-right">{selectedStylist?.name}</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-gray-300 pb-3">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-right">{selectedLocation?.name}</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-gray-300 pb-3">
                    <span className="text-gray-600">Date</span>
                    <span className="font-semibold text-right">
                      {new Date(bookingData.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-600">Time</span>
                    <span className="font-semibold text-right">{bookingData.time}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Please arrive 10 minutes early. Need to reschedule? Contact us at least 24 hours in advance.
              </p>

              <div className="flex flex-col gap-2 xs:gap-3 sm:flex-row justify-center">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto border-2 border-[#5A2C3D] text-[#5A2C3D] px-8 py-3 rounded-full hover:bg-[#5A2C3D] hover:text-white transition-all duration-300 font-semibold text-base xs:text-lg"
                >
                  Print Confirmation
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/';
                  }}
                  className="w-full sm:w-auto bg-[#C9A66B] text-white px-8 py-3 rounded-full hover:bg-[#5A2C3D] transition-all duration-300 font-semibold text-base xs:text-lg"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
