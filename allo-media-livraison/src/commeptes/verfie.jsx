import React from "react";
import { useForm } from "react-hook-form";

const Verifie = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div className="max-w-md mx-auto border max-w-sm mt-20 rounded">
      <form className="shadow-md px-4 py-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-2 mb-6">
          <input
            {...register("code1", { required: true })}
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength="4"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Verifie;
