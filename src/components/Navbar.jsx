import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center px-4 py-5 h-12 text-white">
      <div className="mycontainer flex justify-between items-center px-4 h-9 ">
        <div className="logo font-bold text-2xl hover:scale-125 transition-transform duration-200 ">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/Con">Contact</a>
          </li>
              </ul> */}

        <button className="text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1 hover:bg-green-600 hover:scale-110">
          <img
            className="invert  w-8 p-1"
            src="/assets/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
