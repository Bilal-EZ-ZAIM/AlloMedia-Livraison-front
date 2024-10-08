import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { verifier2FA } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const VerifyLogin = () => {
  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    console.log("Form Data:", data);

    try {
      const res = await dispatch(verifier2FA(data));

      console.log("Dispatch Response:", res.payload);

      if (res?.payload.status === "success") {
        Navigate("/");
      } else {
        console.log("Verification failed: ", res?.message || "Unknown error");
      }
    } catch (error) {
      console.log("Error during verification:", error); // في حالة حدوث خطأ
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Verify Your Login
          </h2>
          <p className="mb-4 text-sm">
            Please enter the code sent to your email. It will expire in 5
            minutes.
          </p>

          {error && (
            <div className="text-red-600 mb-3 bg-red-100 p-3 rounded-lg flex items-center">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(submit)}>
            <input
              {...register("code", { required: "Code is required" })}
              type="text"
              className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter code"
            />
            {errors.code && (
              <p className="text-red-500 text-sm mt-1 mb-3">
                {errors.code.message}
              </p>
            )}
            <button className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-gray-800">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyLogin;
