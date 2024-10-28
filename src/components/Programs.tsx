import React from 'react';
import { Calendar, Video, Users } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transform your fitness journey with our specialized programs
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Virtual Get FIT</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">12</span>
                <span className="ml-1 text-xl font-semibold">weeks</span>
              </p>
              <p className="mt-6 text-gray-500">
                Comprehensive fitness program focused on sustainable weight loss and behavior change.
              </p>

              <ul className="mt-6 space-y-6">
                <li className="flex">
                  <Calendar className="flex-shrink-0 w-6 h-6 text-blue-500" />
                  <span className="ml-3 text-gray-500">Structured weekly plans</span>
                </li>
                <li className="flex">
                  <Video className="flex-shrink-0 w-6 h-6 text-blue-500" />
                  <span className="ml-3 text-gray-500">On-demand workouts</span>
                </li>
                <li className="flex">
                  <Users className="flex-shrink-0 w-6 h-6 text-blue-500" />
                  <span className="ml-3 text-gray-500">Community support</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="mt-8 block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
            >
              Join Program
            </a>
          </div>

          {/* Add more program cards here */}
        </div>
      </div>
    </section>
  );
};

export default Programs;