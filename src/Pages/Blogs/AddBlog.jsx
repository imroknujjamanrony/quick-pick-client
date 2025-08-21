
import React from "react";
import Swal from 'sweetalert2'
const AddBlog = () => {
  const handleAddBlogs = (event) => {
    event.preventDefault();

    const form = event.target;
    const image =form.image.value;
    const title =form.title.value;
    const date =form.date.value;
    const categories =form.categories.value;
    const description =form.description.value;

   const blogData = {
    image, title, date, categories, description
   }


    fetch('http://localhost:5000/addblogs',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(blogData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
           Swal.fire({
  title: "Blog Add Successfully",
  icon: "success",
  draggable: true
});
        }
    })




  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleAddBlogs}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          ✍️ Add Blog
        </h2>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image link..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Blog title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Categories
          </label>
          <input
            type="text"
            name="categories"
            placeholder="e.g. Tech, Lifestyle"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write your blog description..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

         {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200"
        >
          Save Blog
        </button>
       
      </form>
    </div>
  );
};

export default AddBlog;






