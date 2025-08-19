import React from "react";
import { Link } from "react-router-dom";

const Title = ({title, subtitle}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="ml-10 text-[#9CA3AF] font-medium text-[14px]">
          {subtitle}
        </p>
      </div>
      <div>
        <Link to={'/filter-products'} className="p-1 md:px-5 md:py-3 font-bold hover:underline border-[#E5E7EB] border-2 rounded-4xl">
          View All →
        </Link>
      </div>
    </div>
  );
};

export default Title;
