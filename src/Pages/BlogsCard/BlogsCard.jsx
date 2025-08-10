
const BlogsCard = ({ blog }) => {
  const { image, title, date, categories, description, buttonText } = blog;

  return (
    <div>
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
          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-slate-800 px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-semibold text-white duration-300 hover:bg-slate-950">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
