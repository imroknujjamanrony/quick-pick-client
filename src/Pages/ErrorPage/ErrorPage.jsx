import React from 'react';

import { Link } from 'react-router-dom';
import error from '../../assets/Error/error.png'
const ErrorPage = () => {
    return (
           <div>
            <div className="hero mt-20">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img src={error} alt="" />
    <h1 className='text-4xl font-bold mt-2'>That Page Cant Be Found</h1>
      <p className="py-6 text-lg text-shadow-slate-300">
        It looks like nothing was found at this location. Maybe try to
        search for what you are looking for?
      </p>
      <Link to='/'><button className="bg-custom-purple text-white px-4 py-2 rounded bg-[#523a84]">
  Go To Homepage
</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;