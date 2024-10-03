import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700">
          Login
        </h1>
        <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* حقل كلمة المرور مع التسميات والأيقونات */}
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* تسجيل الدخول باستخدام Google */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Or sign in with</p>
          <button className="mt-2 flex items-center justify-center w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
            {/* أيقونة Google */}
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
