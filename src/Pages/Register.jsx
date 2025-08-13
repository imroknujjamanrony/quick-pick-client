import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <p className="text-sm mb-4">
        There are many advantages to creating an account: faster payment
        process, shipment tracking, and much more.
      </p>
      <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Username */}
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

          {/* Email */}
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

          {/* Password */}
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

          {/* Role Selection */}
          <div className="flex gap-2">
            <input
              type="radio"
              value="customer"
              {...register("role", { required: true })}
              defaultChecked
            />
            <p>I am a customer</p>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              value="vendor"
              {...register("role", { required: true })}
            />
            <p>I am a vendor</p>
          </div>

          {/* Submit */}
          <div className="form-control mt-6 text-center">
            <input
              className="btn bg-[#634c95] text-white w-full"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
