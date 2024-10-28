import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Rachel's approach to fitness is refreshing. She makes every workout feel like a celebration!",
      author: "Sarah M.",
      role: "Virtual Get FIT Member",
      rating: 5
    },
    {
      content: "The daily themes make exercise fun and engaging. I've never been more consistent with my workouts.",
      author: "Michael R.",
      role: "Live Class Participant",
      rating: 5
    },
    {
      content: "Finally found a program that focuses on long-term success rather than quick fixes.",
      author: "Jennifer K.",
      role: "12-Week Program Graduate",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Real stories from our community members
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;