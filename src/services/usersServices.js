import axiosI from "../utils/axiosInstance.js"

export const allusers = async() =>{
    const {data} = await axiosI.get("/admin-users")
    return data.data
}

//delete user
export const deleteUser = async(id) => {
    const {data} = await axiosI.delete(`/admin-users/${id}`)
    return data
}

//update role 
export const updateRole = async ({ id, role }) => {
  const { data } = await axiosI.patch(`/admin-users`, { id, role });
  return data;
};

