import React from 'react';
import ProductCard from './Shared/ProductCard';

const ProductSection = ({ title, subtitle, products }) => {
  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <div className='flex items-center justify-center'><h2 className="text-2xl font-bold">{title}</h2>
        <p className='ml-10 text-[#9CA3AF] font-medium text-[14px]'>{subtitle}</p></div>
        <div>
        <button className="p-1 md:px-5 md:py-3 font-bold hover:underline border-[#E5E7EB] border-2 rounded-4xl">View All →</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-xl overflow-x-auto pb-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
