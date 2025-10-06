import { Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barber cutting hair"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Sharp Looks,
          <span className="block text-yellow-500">Sharper Style</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
          Experience the art of grooming with our master barbers
        </p>
        <button
          onClick={scrollToBooking}
          className="group relative inline-flex items-center space-x-3 bg-yellow-500 text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
        >
          <Calendar className="w-6 h-6" />
          <span>Book Appointment</span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-yellow-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
