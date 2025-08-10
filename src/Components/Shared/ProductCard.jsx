import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, discount, image, tags } = product;

  return (
    <div className="border border-gray-200 p-3  flex-shrink-0">
      {discount && (
        <div className="bg-red-500 text-white px-2 py-1 text-xs rounded absolute">
          {discount}% OFF
        </div>
      )}
      <img src={image} alt={name} className="h-32 object-contain mx-auto" />
      
      <div className="mt-2">
        <div className="flex flex-wrap gap-1 mb-1">
          {tags?.map(tag => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full ${
                tag === 'organic'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <h4 className="text-sm font-medium">{name}</h4>
        <div className="text-sm font-semibold text-red-600">${price}</div>
        <div className="text-xs line-through text-gray-400">${oldPrice}</div>
        <button className="mt-2 w-full bg-purple-600 text-white text-sm py-1 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
