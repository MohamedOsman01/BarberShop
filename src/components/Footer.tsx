import { Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Scissors className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-bold">Elite Cuts</span>
          </div>

          <p className="text-gray-400 text-center">
            Sharp Looks, Sharper Style
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-yellow-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
            <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</a>
            <a href="#booking" className="hover:text-yellow-500 transition-colors">Booking</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>

          <div className="border-t border-gray-800 w-full pt-8 mt-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Elite Cuts Barbershop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
