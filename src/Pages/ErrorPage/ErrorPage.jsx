
import React from 'react';
import { Link } from 'react-router-dom';
import error2 from '../../assets/Error/error2.png';

const ErrorPage = () => {
    return (
        <div className="mt-20 px-4">
            <div className="hero">
                <div className="hero-content text-center w-full flex flex-col items-center justify-center">
                    <img
                        className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[873px] mx-auto"
                        src={error2}
                        alt="Error"
                    />
                    <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold mt-6">
                        That Page Can't Be Found
                    </h1>
                    <p className="py-6 text-[16px] md:text-[18px] text-[#6B7280] max-w-xl">
                        It looks like nothing was found at this location. Maybe try to
                        search for what you are looking for?
                    </p>
                    <Link to="/">
                        <button className="text-[14px] text-white px-5 py-2 rounded bg-[#523a84] hover:bg-[#422b6b] transition">
                            Go To Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
