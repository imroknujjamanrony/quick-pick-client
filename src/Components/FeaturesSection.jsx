import React from 'react';
import { FaCreditCard, FaCheckCircle, FaTruck, FaTags } from 'react-icons/fa';

const features = [
  {
    icon: <FaCreditCard className="text-purple-600 text-2xl" />,
    title: 'Payment only online',
    description: 'Fast checkout experience. Mobile friendly.',
  },
  {
    icon: <FaTags className="text-yellow-500 text-2xl" />,
    title: 'New stocks and sales',
    description: 'Fresh deals weekly. Mobile checkout.',
  },
  {
    icon: <FaCheckCircle className="text-indigo-600 text-2xl" />,
    title: 'Quality assurance',
    description: 'Trusted brands. Reliable products.',
  },
  {
    icon: <FaTruck className="text-yellow-400 text-2xl" />,
    title: 'Delivery from 1 hour',
    description: 'Fast delivery right to your door.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <h4 className="font-semibold text-sm">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
