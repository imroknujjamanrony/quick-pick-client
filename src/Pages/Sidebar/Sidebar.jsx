
import SideCard from '../SidebarCard/SideCard';
import SocialMedia from '../SocialMedia/SocialMedia';

const Sidebar = ({ blogs }) => {
  return (
    <div className="p-3 sm:p-4 grid grid-cols-1 lg:p-6">
      <h2 className="text-black text-sm sm:text-base md:text-lg mb-4 font-bold">
        Blog Post List
      </h2>

      {/* Blog list */}
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <SideCard key={index} blog={blog} />
        ))}
      </div>

      <div className="divider my-6"></div>

      {/* Social media section */}
      <div className="mt-4">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Sidebar;
