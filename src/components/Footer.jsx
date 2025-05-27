import React from 'react'

const Footer = () => {
  return (
    <div className="bg-green-950 w-full bottom-0 flex flex-row justify-between items-center  text-white h-10">
          <div className="logo font-bold">
              <a href="/">
              
              
        <span className="text-green-600">&lt;</span>
        Pass
        <span className="text-green-600">OP/&gt;</span>
          </a>
          </div>
      <span className='flex mx-2'>
        Made with <img className=" mx-2 flex w-[20px]" src="/assets/heart.png" alt="" /> by
        Vedant     
      </span>
    </div>
  );
}

export default Footer
