import React from 'react';
const Manager = () => {
  return (
    <div className="mycontainer   my-3 mx-auto items-center justify-center">
      <div className="font-bold text-center text-3xl hover:scale-115 transition-transform duration-200 ">
        {" "}
        <span className="text-green-600">&lt;</span>
        Pass
        <span className="text-green-600">OP/&gt;</span>
      </div>
      <p className="text-green-700 text-center">Your Password Manager</p>
      <div className="text-white flex flex-col items-center p-4">
        <input
          type="text"
          placeholder="Enter Username"
          className="w-full rounded-full border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-1 text-black"
        />

        <div className="flex gap-10 my-2 items-center">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full rounded-full border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-1 text-black"
          />{" "}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full rounded-full border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-1 text-black "
            />
            <span className="absolute right-0 top-1 ">show</span>
          </div>

        </div>
        <button className="border border-emerald-900 flex items-center justify-center gap-2 rounded-full h-9 bg-green-600 px-6 py-3 my-4 w-fit hover:bg-green-500 hover:scale-115 transition-transform duration-200 text-black text-bold">
          <lord-icon
            id="9898"
            src="https://cdn.lordicon.com/fikcyfpp.json"
            trigger="hover"
            colors="primary:#121331,secondary:#000000"
          ></lord-icon>
          Add Password
        </button>
      </div>
    </div>
  );
}

export default Manager
