
import { useForm } from "react-hook-form"


  
const Register = () => {
     const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
    return (
        
       <div>
        <p className='text-sm mb-4   '>There are many advantages to creating an account the payment  process is  faster,shipment,tracking is possible and much more.</p>
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
<div className="flex gap-2">
    <input type="radio" name="radio-1" defaultChecked />
<p>I am a customer</p>
</div>
<div className="flex gap-2">
    <input type="radio" name="radio-1"  />
<p>I am a vendor</p>
</div>

            <div className="form-control mt-6 text-center">
              <input  className="btn bg-[#634c95] text-white w-full" type="submit" 
              value="Register" />
              
            </div>
          </form>
        </div>
       </div>
    );
};

export default Register;