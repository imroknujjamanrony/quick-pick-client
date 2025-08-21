
import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import BlogsCard from '../BlogsCard/BlogsCard';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
  const { blogs, count } = useLoaderData();
  const [blogDelete, setBlogsDelete] = useState(blogs);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count.count / itemsPerPage);

  
  const currentBlogs = blogDelete.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className='w-[1380px] mx-auto px-4 py-6'>
      <div className='flex gap-8'>
        <div className="w-full">
          {currentBlogs.map(blog => (
            <BlogsCard 
              key={blog._id} 
              blog={blog}
              blogDelete={blogDelete}
              setBlogsDelete={setBlogsDelete}
            />
          ))}
        </div>

        <div>
          <Sidebar blogs={currentBlogs} />
        </div>
      </div>

      {/* Pagination buttons */}
      <div className='flex justify-center mt-8 gap-2'>
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="btn bg-gray-300 disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>

        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn ${
              currentPage === page ? 'bg-[#634C9F] text-white' : 'bg-[#F3F4F6] text-black'
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(numberOfPages - 1, currentPage + 1))}
          disabled={currentPage === numberOfPages - 1}
          className="btn bg-gray-300 disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div> 
    </div>
  );
};

export default Blogs;
