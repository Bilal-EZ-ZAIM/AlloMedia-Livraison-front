import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { UpdatePassword } from "../redux/features/authSlice";

const UpdatPassword = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("newPassword");

  const submit = (data) => {
    console.log(data);

    dispatch(UpdatePassword(data));
  };

  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700">
          Update Password
        </h1>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700">Verification Code</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                  errors.verificationCode ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                type="text"
                placeholder="Enter the verification code"
                {...register("code", {
                  required: "Verification code is required",
                })}
              />
            </div>
            {errors.verificationCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.verificationCode.message}
              </p>
            )}
            <p className="text-gray-500 text-sm mt-1">
              Please enter the code you received via email. It will expire in 5
              minutes.
            </p>
          </div>

          <div>
            <label className="block text-gray-700">New Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                type="password"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatPassword;
