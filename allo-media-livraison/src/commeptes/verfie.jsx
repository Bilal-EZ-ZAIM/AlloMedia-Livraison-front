import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../redux/features/authSlice";
const Verifie = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(verifyOtp(data));
  };
  return (
    <>
      <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div class="flex flex-col space-y-2 text-center">
          <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p class="text-md md:text-xl">Enter the OTP we just sent you.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="flex flex-col max-w-md space-y-5">
            <input
              {...register("code", { required: true })}
              type="text"
              placeholder="otp"
              class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
            <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Verifie;
