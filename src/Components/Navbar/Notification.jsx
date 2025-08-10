import React from "react";

const Notification = () => {
  return (
    <div className="bg-[#634C9F] text-[12px] font-medium text-white md:flex lg:flex justify-around py-2 text-center">
    <div className="bg-[#634C9F] text-[12px] font-medium text-white flex justify-around py-2">
      <div>
        <h1>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h1>
      </div>
      <div>
        <h1>
          {" "}
          Until the end of the sale:
          <span className="font-extrabold text-[15px] mx-1">47</span>
          days
          <span className="font-extrabold text-[15px] mx-1">06</span>
          hours
          <span className="font-extrabold text-[15px] mx-1">55</span>
          minutes
          <span className="font-extrabold text-[15px] mx-1">21</span>
          sec.
        </h1>
      </div>
    </div>
    </div>
  );
};

export default Notification;
