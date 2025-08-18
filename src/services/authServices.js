// services/authServices.js
import { axiosI } from "../utils/axiosInstance.js";

// Instead of a function, export each service directly
export const registerTOdb = async (userData) => {
  try {
    const { data } = await axiosI.post("/register", userData);
    return data;
  } catch (err) {
    console.error("registerTOdb error:", err);
    throw err; // Let caller handle the error
  }
};

export const loginToDB = async (email) => {
  try {
    const { data } = await axiosI.post("/login", { email });
    return data;
  } catch (err) {
    console.error("loginToDB error:", err);
    throw err;
  }
};

export const logOutAndRemoveCookie = async () => {
  try {
    const { data } = await axiosI.post("/logout");
    return data;
  } catch (err) {
    console.error("logOutAndRemoveCookie error:", err);
    throw err;
  }
};
