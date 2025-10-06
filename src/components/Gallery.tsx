import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Classic Fade'
  },
  {
    url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Pompadour'
  },
  {
    url: 'https://images.pexels.com/photos/3998396/pexels-photo-3998396.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beard Grooming'
  },
  {
    url: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Textured Crop'
  },
  {
    url: 'https://images.pexels.com/photos/1587802/pexels-photo-1587802.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sharp Line Up'
  },
  {
    url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Gentleman Style'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-yellow-500">Work</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse our portfolio of transformations and precision cuts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
