
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BlogsCard = ({ blog, blogDelete, setBlogsDelete }) => {
  const { _id, image, title, date, categories, description, buttonText } = blog;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addblogs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete Response:", data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaning = blogDelete.filter(
                (blogdlt) => blogdlt._id !== id
              );
              setBlogsDelete(remaning);
            }
          })
          .catch((err) => console.error("Delete Error:", err));
      }
    });
  };

  return (
    <div>
      <div className="space-y-4 rounded-lg bg-white p-4 sm:p-6 shadow-lg">
        <img
          className="w-full h-auto rounded-lg object-cover"
          src={image}
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-black/60 text-justify">
            {description}
          </p>
        </div>

        {/* Buttons section */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <div className="flex flex-wrap gap-4">
            <Link to={`/blogs/${_id}`}>
              <button className="rounded-lg bg-slate-800 px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-semibold text-white duration-300 hover:bg-slate-950">
                Read More
              </button>
            </Link>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error w-24"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;


