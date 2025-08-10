import React from "react";

const CompanyCard = ({ company }) => {
  const { name, rating, reviews, description, image } = company;

  return (
    <div className="border border-[#E5E7EB] rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
      <img
        src={image || "/images/company-placeholder.png"}
        alt={name}
        className="w-16 h-16 rounded-full mb-3 object-cover"
      />
      <h3 className="font-semibold">{name}</h3>
      <span className="text-gray-500 text-sm">Featured</span>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1">
        <span className="text-yellow-500">⭐</span>
        <span className="font-medium">{rating}</span>
        <span className="text-gray-500 text-sm">({reviews})</span>
      </div>

      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default CompanyCard;
