import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { registers } from "../redux/features/authSlice";

const Register = () => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(error);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registers(data));
  };

  const password = watch("password");

  return (
    <div className="max-h-full bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="w-full lg:w-1/2 xl:w-5/12 p-2 pb-4 flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center  w-full">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-700">
              Create Your Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  mt-8">
              <div className="mx-auto w-[95%] sm:w-[70%] space-y-4">
                {/* Full Name */}
                <label className="block text-gray-700">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-500" />
                  <input
                    className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />
                  {error?.map((item, index) => (
                    <p className="text-red-500 text-sm mt-1" key={index}>
                      {" "}
                      {item.path === "name" ? item.msg : null}{" "}
                    </p>
                  ))}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}

                {/* Email */}
                <label className="block text-gray-700">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                  <input
                    className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}

                  {error?.map((item, index) => (
                    <p className="text-red-500 text-sm " key={index}>
                      {" "}
                      {item.path === "email" ? item.msg : null}{" "}
                    </p>
                  ))}
                </div>

                {/* Phone */}
                <label className="block text-gray-700">Phone Number</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-500" />
                  <input
                    className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                    type="text"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                  {error?.map((item, index) => (
                    <p className="text-red-500 text-sm " key={index}>
                      {" "}
                      {item.path === "phone" ? item.msg : null}{" "}
                    </p>
                  ))}
                </div>

                {/* Password */}
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-500" />
                  <input
                    className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                    type="password"
                    placeholder="Create a Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}

                  {error?.map((item, index) => (
                    <p className="text-red-500 text-sm " key={index}>
                      {" "}
                      {item.path === "password" ? item.msg : null}{" "}
                    </p>
                  ))}
                </div>

                {/* Confirm Password */}
                <label className="block text-gray-700">Confirm Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-500" />
                  <input
                    className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />

                  {error?.map((item, index) => (
                    <p className="text-red-500 " key={index}>
                      {" "}
                      {item.path === "confirmPassword" ? item.msg : null}{" "}
                    </p>
                  ))}

                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 tracking-wide font-semibold bg-indigo-600 text-white w-full py-2 rounded-lg hover:bg-indigo-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/Forms-rafiki.png')",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
