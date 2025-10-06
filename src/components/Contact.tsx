import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Visit <span className="text-yellow-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Stop by and experience the Elite Cuts difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-black p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Address</p>
                    <p className="text-gray-400">
                      1234 Main Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a href="mailto:info@elitecuts.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      info@elitecuts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Hours</p>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 p-4 hover:bg-yellow-400 transition-colors transform hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-6 h-6 text-black" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 p-4 hover:bg-yellow-400 transition-colors transform hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185492346469!3d40.74117413508152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
