import { useState } from 'react';
import { Calendar, Clock, Mail, Phone, User, Scissors, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const services = [
  'Signature Haircut',
  'Beard Trim & Shape',
  'Classic Shave',
  'Facial Grooming',
  'Kids Cut',
  'Full Service Package'
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

export default function Booking() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    service: '',
    bookingDate: '',
    bookingTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('bookings').insert([
        {
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          service: formData.service,
          booking_date: formData.bookingDate,
          booking_time: formData.bookingTime,
          notes: formData.notes,
          status: 'pending'
        }
      ]);

      if (insertError) throw insertError;

      setIsSuccess(true);
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        service: '',
        bookingDate: '',
        bookingTime: '',
        notes: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book Your <span className="text-yellow-500">Appointment</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Reserve your spot with our expert barbers today
          </p>
        </div>

        {isSuccess && (
          <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <p className="text-green-800 font-semibold">
              Booking submitted successfully! We'll confirm your appointment shortly.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <User className="w-5 h-5 text-yellow-500" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>Email</span>
              </label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>Phone</span>
              </label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <Scissors className="w-5 h-5 text-yellow-500" />
                <span>Service</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <Calendar className="w-5 h-5 text-yellow-500" />
                <span>Date</span>
              </label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-white mb-2 font-semibold">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>Time</span>
              </label>
              <select
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors"
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-white mb-2 font-semibold block">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white border-2 border-gray-700 focus:border-yellow-500 outline-none transition-colors resize-none"
              placeholder="Any special requests or preferences..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-yellow-500 text-black py-4 text-lg font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-transform duration-300"
          >
            {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </section>
  );
}
