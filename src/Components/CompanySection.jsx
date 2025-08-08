import React from "react";
import CompanyCard from "./Shared/CompanyCard";


const CompanySection = ({ title, subtitle, companies }) => {
  return (
    <section className="my-8 px-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
        <button className="text-blue-600 text-sm hover:underline">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </section>
  );
};

export default CompanySection;
