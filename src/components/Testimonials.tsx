import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  customer_name: string;
  rating: number;
  review_text: string;
  service: string;
  created_at: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(6);

    if (!error && data) {
      setTestimonials(data);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'
        }`}
      />
    ));
  };

  const defaultTestimonials = [
    {
      id: '1',
      customer_name: 'Michael Thompson',
      rating: 5,
      review_text: 'Best barbershop in the city! Marcus gave me the perfect fade. The atmosphere is professional yet relaxed, and the attention to detail is unmatched.',
      service: 'Signature Haircut',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      customer_name: 'David Chen',
      rating: 5,
      review_text: 'I\'ve been coming here for 3 years now. Javier is an artist with the clippers. Always leave looking sharp and feeling confident.',
      service: 'Beard Trim & Shape',
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      customer_name: 'Robert Williams',
      rating: 5,
      review_text: 'The classic shave experience is incredible! Hot towels, straight razor - they really know their craft. Highly recommend.',
      service: 'Classic Shave',
      created_at: new Date().toISOString()
    },
    {
      id: '4',
      customer_name: 'Alex Rodriguez',
      rating: 5,
      review_text: 'Professional, skilled, and friendly. Devon always delivers exactly what I ask for. Worth every penny.',
      service: 'Full Service Package',
      created_at: new Date().toISOString()
    },
    {
      id: '5',
      customer_name: 'James Patterson',
      rating: 5,
      review_text: 'My son loves getting his haircut here! The barbers are great with kids and very patient. Clean shop, great vibes.',
      service: 'Kids Cut',
      created_at: new Date().toISOString()
    },
    {
      id: '6',
      customer_name: 'Marcus Johnson',
      rating: 5,
      review_text: 'Elite Cuts lives up to its name. Top-notch service, skilled barbers, and a welcoming environment. My go-to spot!',
      service: 'Signature Haircut',
      created_at: new Date().toISOString()
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-10 left-10 w-32 h-32 text-yellow-500" />
        <Quote className="absolute bottom-10 right-10 w-32 h-32 text-yellow-500 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-yellow-500">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 relative transform hover:scale-105 transition-transform duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-500 opacity-20" />

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review_text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black text-lg">{testimonial.customer_name}</p>
                <p className="text-yellow-500 text-sm font-semibold">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500 px-6 py-3">
            <Star className="w-6 h-6 fill-black text-black" />
            <span className="text-black font-bold text-xl">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
