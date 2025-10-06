import { Scissors, Sparkles, Gift, User, Users as UsersIcon, Settings } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Signature Haircut',
    price: '$45',
    duration: '45 min',
    description: 'Premium cut with wash, style, and hot towel treatment'
  },
  {
    icon: Scissors,
    name: 'Beard Trim & Shape',
    price: '$30',
    duration: '30 min',
    description: 'Expert beard sculpting with razor line-up and conditioning'
  },
  {
    icon: Sparkles,
    name: 'Classic Shave',
    price: '$35',
    duration: '40 min',
    description: 'Traditional straight razor shave with hot towels and massage'
  },
  {
    icon: Settings,
    name: 'Facial Grooming',
    price: '$40',
    duration: '35 min',
    description: 'Complete facial grooming with cleansing and moisturizing'
  },
  {
    icon: User,
    name: 'Kids Cut',
    price: '$25',
    duration: '30 min',
    description: 'Gentle haircut for ages 12 and under in a fun environment'
  },
  {
    icon: Gift,
    name: 'Full Service Package',
    price: '$95',
    duration: '90 min',
    description: 'Haircut, beard trim, shave, and facial grooming'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-yellow-500 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-yellow-500 rotate-12"></div>
        <Scissors className="absolute top-1/2 left-1/4 w-24 h-24 text-yellow-500 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Premium grooming services tailored to your style and personality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <service.icon className="w-12 h-12 text-yellow-500 group-hover:text-black mb-4 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-black mb-2">{service.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-yellow-500 group-hover:text-black transition-colors duration-300">
                  {service.price}
                </span>
                <span className="text-gray-600 group-hover:text-black/70 transition-colors duration-300">
                  {service.duration}
                </span>
              </div>
              <p className="text-gray-700 group-hover:text-black transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All services include complimentary beverages and consultation
          </p>
        </div>
      </div>
    </section>
  );
}
