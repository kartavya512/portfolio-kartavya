'use client';

import { useState, useEffect } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      id: 1,
      number: '10+',
      label: 'Projects Completed',
      description: 'Full-stack applications delivered'
    },
    {
      id: 2,
      number: '4',
      label: 'Companies',
      description: 'Professional experience across'
    },
    {
      id: 3,
      number: '15+',
      label: 'Technologies',
      description: 'Actively building with'
    },
    {
      id: 4,
      number: '50+',
      label: 'User Stories',
      description: 'Successfully delivered'
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Impact in Numbers
          </h2>

          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Delivering scalable products with clean engineering and modern technologies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`
              group
              bg-white
              rounded-2xl
              p-10
              text-center
              border
              border-gray-100
              transition-all
              duration-500
              hover:shadow-xl
              hover:-translate-y-2
              hover:border-gray-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-3 text-lg font-semibold text-gray-800">
                {stat.label}
              </div>

              {/* Description */}
              <div className="mt-2 text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </div>

              {/* Divider */}
              <div className="mt-6 mx-auto h-[2px] w-8 bg-gray-200 transition-all duration-300 group-hover:w-16 group-hover:bg-gray-900" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;