import { Award, Users, Clock } from 'lucide-react';

const barbers = [
  {
    name: 'Marcus Steel',
    role: 'Master Barber',
    experience: '15 years',
    image: 'https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Classic cuts & fades'
  },
  {
    name: 'Javier Rodriguez',
    role: 'Senior Barber',
    experience: '10 years',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Modern styles & beards'
  },
  {
    name: 'Devon James',
    role: 'Barber Stylist',
    experience: '8 years',
    image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Creative designs & color'
  }
];

const stats = [
  { icon: Clock, label: '25+ Years', description: 'Combined Experience' },
  { icon: Users, label: '10,000+', description: 'Happy Clients' },
  { icon: Award, label: 'Award Winning', description: 'Service Excellence' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-yellow-500">Elite Cuts</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Since 1998, we've been crafting exceptional grooming experiences in the heart of the city.
            Our team of master barbers combines traditional techniques with modern styles to deliver
            precision cuts and impeccable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-black text-white transform hover:scale-105 transition-transform duration-300">
              <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Meet Our Team</h3>
          <p className="text-gray-600">Skilled professionals dedicated to your style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {barbers.map((barber, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-1">{barber.name}</h4>
                  <p className="text-yellow-500 font-semibold">{barber.role}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Experience:</span> {barber.experience}
                </p>
                <p className="text-gray-600 italic">{barber.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
