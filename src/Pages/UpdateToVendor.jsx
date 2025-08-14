import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { useForm } from "react-hook-form";
const UpdateToVendor = () => {
      const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
    const {user} = useContext(AuthContext)
    return (
        <div className="ml-12">
          <h2 className="text-gray-400">Welcome back, <br />
         <span className="font-bold text-black"> {
            user ? user.email : ''
          }</span>
          </h2> 

          <div className="flex gap-36 mt-8">
            {/* left side */}
            <div>
      
        <table className="table table-pin-rows bg-base-200 ">
    
    <tbody>
      <tr className="font-bold"><td>Orders</td></tr>
      <tr className="font-bold"><td>Dashboard</td></tr>
      <tr className="font-bold"><td>Downloads</td></tr>
      <tr className="font-bold"><td>Addresses</td></tr>
      <tr className="font-bold"><td>Whishlist</td></tr>
      <tr className="font-bold "> <td> Compare</td></tr>
      
    </tbody>
    <thead></thead>
</table>


            </div>
            {/* Right side  */}
            <div>
 <h2 className="font-bold">Update account to Vendor</h2>
 <form className="mb-12" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control w-2xl my-6">
    <label className="label">
      <span className="label-text">First Name*</span>
    </label>
    <input
      type="text"
      placeholder="First Name"
      {...register('firstName', { required: true })}
      required
      className="input input-bordered w-full"
    />
  </div>

  <div className="form-control w-full my-6">
    <label className="label">
      <span className="label-text">Last Name*</span>
    </label>
    <input
      type="text"
      placeholder="Last Name"
      {...register('lastName', { required: true })}
      required
      className="input input-bordered w-full"
    />
  </div>

  <div className="form-control w-full my-6">
    <label className="label">
      <span className="label-text">Shop Name*</span>
    </label>
    <input
      type="text"
      placeholder="Shop Name"
      {...register('shopName', { required: true })}
      required
      className="input input-bordered w-full"
    />
  </div>

  <div className="form-control w-full my-6">
    <label className="label">
      <span className="label-text">Shop URL*</span>
    </label>
    <input
      type="url"
      placeholder="Enter the URL"
      {...register('shopUrl', { required: true })}
      required
      className="input input-bordered w-full"
    />
  </div>

  <div className="form-control w-full my-6">
    <label className="label">
      <span className="label-text">Phone Number*</span>
    </label>
    <input
      type="tel"
      placeholder="Enter the number"
      {...register('phoneNumber', { required: true })}
      required
      className="input input-bordered w-full"
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
            </div> 
        </div>
    );
};

export default UpdateToVendor;