import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div>
      <h1 className="text-black">Social Media Widget</h1>

      <div className="mt-3">
        {/* facebook             */}
        <button className="btn w-full bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Login with Facebook
        </button>

        {/* Twitter Button */}
        <button className="btn w-full flex items-center gap-2 bg-[#1DA1F2] mt-4 text-white border-none rounded-md">
          <FaTwitter size={18} />
          twitter
        </button>

        {/* Instagram Button */}
        <button className="btn w-full flex gap-2 mt-4 bg-[#FD1D1D] text-white border-none rounded-md">
          <FaInstagram size={18} />
          instagram
        </button>

        {/* linkedin */}
        <button className="btn w-full bg-[#0967C2] text-white border-[#0059b3] mt-4">
          <svg
            aria-label="LinkedIn logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
              fillRule="evenodd"
            ></path>
          </svg>
          Login with LinkedIn
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
