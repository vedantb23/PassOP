import React, { useEffect } from "react";
import { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [PassArr, setPassArr] = useState([]);
  useEffect(() => {
    // console.log(form);
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPassArr(JSON.parse(passwords))
    }
    // console.log(passwords);

    // console.log(passArr);
  }, []);

  const showpassword = () => {
    if (ref.current.src.includes("assets/eyecross.png")) {
      ref.current.src = "/assets/eye.png";
    } else {
      ref.current.src = "/assets/eyecross.png";
    }
  };
  // const savePassword = () => {
  //   let passwords = localStorage.getItem("passwords");
  //   localStorage.setItem("passwords", JSON.stringify([...PassArr, form]))
    
  // };
  const savePassword = () => {
    const existing = localStorage.getItem("passwords");
    const parsed = existing ? JSON.parse(existing) : [];
    const updated = [...parsed, form];

    localStorage.setItem("passwords", JSON.stringify(updated));
    setPassArr(updated); // 
    console.log(updated);
  };

  
  const handleChannnge = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mycontainer    mx-auto items-center justify-center">
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
          value={form.site}
          name="site"
          onChange={handleChannnge}
          placeholder="Enter website"
          className="w-full rounded-full border border-green-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-1 text-black"
        />

        <div className="flex gap-8 my-2 items-center w-full ">
          <input
            type="text"
            name="username"
            onChange={handleChannnge}
            value={form.username}
            placeholder="Enter username"
            className=" w-1/2 rounded-full border border-green-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-1 text-black"
          />{" "}
          <div className="relative">
            <input
              type="text"
              onChange={handleChannnge}
              name="password"
              value={form.password}
              placeholder="Enter Password"
              className=" w-full rounded-full border border-green-600 focus:border-green-500 focus:ring-2 relative focus:ring-green-200 px-4 py-1 text-black "
            />
            <span className="absolute right-[1px] top-[4px] ">
              <img
                ref={ref}
                width={25}
                className="p-1 cursor-pointer"
                src="/assets/eye.png"
                alt=""
                onClick={showpassword}
              />
            </span>
          </div>
        </div>
        <button
          className="border border-emerald-900 flex items-center justify-center gap-2 rounded-full h-9 bg-green-600 px-6 py-3 my-4 w-fit hover:bg-green-500 hover:scale-115 transition-transform duration-200 text-black text-bold"
          onClick={savePassword}
        >
          <lord-icon
            id="9898"
            src="https://cdn.lordicon.com/fikcyfpp.json"
            trigger="hover"
            colors="primary:#121331,secondary:#000000"
          ></lord-icon>
          Add Password
        </button>
      </div>
      <div className="passwords">
        <div className="flex fuck items-center my-2">
          <lord-icon
            src="https://cdn.lordicon.com/zruuduya.json"
            trigger="loop"
            colors="primary:#109121,secondary:#109121"
          ></lord-icon>

          <h2 className="font-bold text-1xl">Your Passwords</h2>
        </div>
        {PassArr.length === 0 && <div> No Passwords to Display</div>}
        {PassArr.length !== 0 && (
          <div>
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th>Site</th>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {PassArr.map((item) => {
                  return (
                    <>
                      <tr>
                        <td className="text-center py-1">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                        </td>
                        <td className="text-center py-1">{item.username}</td>
                        <td className="text-center py-1">{item.password}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manager;
