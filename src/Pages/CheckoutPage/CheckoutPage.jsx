import React from "react";
import { useForm } from "react-hook-form";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Order submitted:", data);
  };

  return (
    <div className="md:max-w-[80%] mx-auto">
      <div className="md:mx-auto font-semibold">
        <Link to="/" className="hover:text-green-600 text-gray-400">
          Home
        </Link>{" "}
        &gt; Cart
      </div>
      {/* coupon div */}
      <div className="border flex items-center border-gray-200 p-4 rounded my-6 bg-[#F7F7F7]">
        <span className="mr-2 text-red-800 text-xl">
          <CiBookmark />
        </span>
        <div className="flex items-center w-full text-sm text-gray-700 cursor-pointer border-gray-200 border py-5 px-10">
          Have a coupon?{" "}
          <span className="text-purple-600 ml-1">
            Click here to enter your code
          </span>
        </div>
      </div>
      <div className="my-10 grid lg:grid-cols-3 gap-8">
        {/* LEFT - Billing Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-2 space-y-4 bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Billing details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First name *"
                className="border p-2 rounded w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last name *"
                className="border p-2 rounded w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <input
            {...register("company")}
            placeholder="Company name (optional)"
            className="border p-2 rounded w-full"
          />

          <select
            {...register("country", { required: "Country is required" })}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Country</option>
            <option value="US">United States (US)</option>
            <option value="BD">Bangladesh</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}

          <input
            {...register("street", { required: "Street address is required" })}
            placeholder="House number and street name"
            className="border p-2 rounded w-full"
          />
          {errors.street && (
            <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
          )}

          <input
            {...register("apartment")}
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="border p-2 rounded w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register("city", { required: "City is required" })}
                placeholder="Town / City"
                className="border p-2 rounded w-full"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <select
                {...register("state", { required: "State is required" })}
                className="border p-2 rounded w-full"
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>

          <input
            {...register("zip", { required: "ZIP Code is required" })}
            placeholder="ZIP Code"
            className="border p-2 rounded w-full"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
          )}

          <input
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Phone"
            className="border p-2 rounded w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}

          <input
            {...register("email", { required: "Email address is required" })}
            type="email"
            placeholder="Email address"
            className="border p-2 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("shipDifferent")}
              className="mt-1"
            />
            <span className="text-sm">Ship to a different address?</span>
          </label>
          <p className="text-gray-500">Order Notes (optional)</p>
          <textarea
            {...register("notes")}
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="border p-2 rounded w-full"
          ></textarea>
        </form>

        {/* RIGHT - Order Summary with Place Order button */}
        <aside className="bg-white p-6 rounded-lg shadow flex flex-col justify-between md:h-4/6">
          <div>
            <h3 className="text-lg font-bold mb-3">Your order</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">
                  Marketside Fresh Organic Bananas × 1
                </span>
                <span className="text-sm">$0.89</span>
              </div>

              <hr />

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$0.89</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>

              <div className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span>$15.89</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Payment method</p>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="bank"
                  {...register("payment")}
                  defaultChecked
                />
                Direct Bank Transfer
              </label>
              <label className="flex items-center gap-2 text-sm mt-1">
                <input type="radio" value="check" {...register("payment")} />
                Check Payments
              </label>
              <label className="flex items-center gap-2 text-sm mt-1">
                <input type="radio" value="cod" {...register("payment")} />
                Cash On Delivery
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <span className="underline text-blue-500">privacy policy</span>.
              </p>
              <label className="flex items-center gap-2 text-sm mt-3">
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                />
                I have read and agree to the website terms and conditions
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">
                  You must agree to terms
                </p>
              )}
            </div>
          </div>

          {/* PLACE ORDER BUTTON (outside the form) — call handleSubmit to validate and submit the left form */}
          <div className="mt-3">
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Place order
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
