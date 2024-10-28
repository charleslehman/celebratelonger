import React from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Rachel
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Rachel's journey began on National Tapioca Pudding Day (July 15, 2016), when she discovered 
              the joy of celebrating everyday moments. This experience transformed into a unique approach 
              to fitness that combines professional expertise with daily celebration.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Proud UT Austin Graduate</h3>
                  <p className="mt-2 text-gray-500">
                    <span className="font-medium" style={{ color: '#BF5700' }}>Double Longhorn 🤘:</span><br />
                    M.S. in Kinesiology from UT Austin (2016)<br />
                    B.A. in Kinesiology/Exercise Science from UT Austin (2014)
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Professional Certifications</h3>
                  <p className="mt-2 text-gray-500">
                    ACSM Certified Personal Trainer<br />
                    Gray Institute CAFS<br />
                    Certified Habit Coach Professional L1
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Philosophy</h3>
                  <p className="mt-2 text-gray-500">
                    Making every day worth celebrating through movement and mindful living.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative max-w-[350px] mx-auto">
              <img
                className="rounded-lg shadow-xl w-full object-cover bg-white"
                style={{ aspectRatio: '9/16' }}
                src="https://i.ibb.co/p3Cs9q3/PXL-20240912-181341853.jpg"
                alt="Rachel"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-100 px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm text-blue-700 font-medium">Is there a National Pinecone Day? If not, there should be!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;