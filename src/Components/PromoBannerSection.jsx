import React from 'react';

const promos = [
  {
    label: 'Only This Week',
    title: 'Quality eggs at an affordable price',
    description: 'Eat one every day',
    image: '/images/eggs.jpg',
  },
  {
    label: 'Only This Week',
    title: 'Snacks that nourishes our mind and body',
    description: 'Shine the morning...',
    image: '/images/snacks.jpg',
  },
  {
    label: 'Only This Week',
    title: 'Unbeatable quality, unbeatable prices.',
    description: 'Only this week. Don’t miss...',
    image: '/images/snacky.jpg',
  },
];

const PromoBannerSection = () => {
  return (
    <section className="py-8 px-2">

      {/* Promo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="bg-white rounded overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <img src={promo.image} alt={promo.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <span className="text-xs text-orange-500 font-semibold">{promo.label}</span>
              <h3 className="font-bold text-base mt-1">{promo.title}</h3>
              <p className="text-sm text-gray-500">{promo.description}</p>
              <button className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                Shop Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBannerSection;
