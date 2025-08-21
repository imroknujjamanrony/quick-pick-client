import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axiosI from "../utils/axiosInstance";
import Loader from "../Components/loader/Loader";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { createUser, loading, setCurrentUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // console.log("from : ", data.email, data.password);
      const result = await createUser(data?.email, data?.password);
      const loggedUser = result.user;

      if (loggedUser?.email) {
        const userInfo = {
          name: data?.name,
          email: data?.email,
        };

        const { data: userData } = await axiosI.post("/register", userInfo, {
          withCredentials: true,
        });
        console.log("after register :", userData?.data?._id);
        if (userData) {
          setCurrentUser(userData?.data);
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <div>
      <p className="text-sm mb-4   ">
        There are many advantages to creating an account the payment process is
        faster,shipment,tracking is possible and much more.
      </p>
      <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* Email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-600">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-600">Invalid email address</span>
            )}
          </div>
          {/* Password  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600">
                Password cannot exceed 20 characters
              </span>
            )}
          </div>

          <div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account , and
              for other purpose discuss in our{" "}
              <Link to="/privacypolicy">
                <span className="text-[#634c95]"> privacy policy</span>
              </Link>
            </p>
          </div>

          <div className="form-control mt-6 text-center">
            <button
              className="btn bg-[#634c95] text-white w-full"
              type="submit"
            >
              {loading ? <Loader /> : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
