import { useState } from "react";
import { Link } from "react-router-dom";
import useAllUsers from "../hooks/users/useAllUsers.js";
import Paginate from "./pagination/paginate.jsx";
import useDeleteUser from "../hooks/users/useDeleteUser.js";
import useAdmin from "../hooks/users/useAdmin.js";

export default function UsersTable() {
  const { data: allUsers, isLoading, isFetching, refetch } = useAllUsers();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateRole } = useAdmin();

  // If your backend already supports pagination, adapt this:
  const users = allUsers?.data?.users || allUsers || [];
  const totalItems = allUsers?.data?.total || users?.length || 0;
  const totalPages = allUsers?.data?.totalPages || 1;

 const handleEdit = (user) => {
  const { _id, role } = user;
  console.log("Sending update:", { id: _id, role: role === "ADMIN" ? "CUSTOMER" : "ADMIN" });

  updateRole(
    { id: _id, role: role === "ADMIN" ? "CUSTOMER" : "ADMIN" },
    {
      onSuccess: () => {
        console.log("Role updated successfully!");
        refetch();
      },
      onError: (err) => {
        console.error("Update failed:", err);
      }
    }
  );
};


  const handleDelete = (user) => {
    console.log("Delete user:", user);
    deleteUser(user._id);
    refetch();
    // Call the deleteUser mutation with the user's ID
    // mutation(user._id)
  };

  return (
    <div className="overflow-x-auto">
      <div className="text-2xl font-bold mt-10 mb-5 flex justify-between w-[80%] mx-auto">
        <p>Total Users : {totalItems}</p>
        <Link to={"/add-user"} className="text-blue-500 hover:underline">
          Add New User
        </Link>
      </div>

      <table className="w-full border border-gray-300 text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2 sm:table-cell">Role</th>
            <th className="border p-2 sm:table-cell">Last Logged In</th>
            <th className="border p-2 sm:table-cell">Created At</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user._id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user?.name}</td>
              <td className="border p-2">{user?.email}</td>
              <td className="border p-2 sm:table-cell">{user?.role}</td>
              <td className="border p-2 sm:table-cell">
                {user?.lastLoggedIn
                  ? new Date(user.lastLoggedIn).toLocaleString()
                  : "N/A"}
              </td>
              <td className="border p-2 sm:table-cell">
                {new Date(user?.createdAt).toLocaleString()}
              </td>
              <td className="border p-2 relative">
                <button
                  className="px-2 py-1 bg-gray-200 rounded cursor-pointer w-full mx-auto"
                  onClick={() =>
                    setOpenDropdown(openDropdown === user._id ? null : user._id)
                  }
                >
                  ⋮
                </button>
                {openDropdown === user._id && (
                  <div
                    key={user?._id}
                    className="absolute right-0 mt-1 w-40 bg-white border rounded shadow-lg z-10"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleEdit(user)}
                    >
                      ✏️ {user.role === "ADMIN" ? "Make Customer" : "Make Admin"}
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleDelete(user)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-3 mb-5">
        {/* <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isFetching={isFetching}
          isLoading={isLoading}
          totalPages={totalPages}
        /> */}
      </div>
    </div>
  );
}
