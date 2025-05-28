import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();  
const Manager = () => {
  const ref = useRef();
  const passwordREf = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [PassArr, setPassArr] = useState([]);
  
  const showpassword = () => {
    passwordREf.current.type="text"
    if (ref.current.src.includes("assets/eyecross.png")) {
      ref.current.src = "/assets/eye.png";
      passwordREf.current.type = "password";
    } else {
      ref.current.src = "/assets/eyecross.png";
      passwordREf.current.type = "text";
    }
  };
// <<<<<<< HEAD
  const GETPassword = async() => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setPassArr(passwords)
  };
  useEffect(() => {
    GETPassword()
  }, []);
  
  const savePassword = async () => {
    if (
      form.site.length >= 3 &&
      form.username.length >= 3 &&
      form.password.length >= 3
    ) {
      const newId = uuidv4(); // generate UUID once
      const newPassword = { ...form, id: newId };
// =======
  // const savePassword = () => {
  //   let passwords = localStorage.getItem("passwords");
  //   localStorage.setItem("passwords", JSON.stringify([...PassArr, form]))
    
  // };
  const savePassword = () => {
    // const existing = localStorage.getItem("passwords");
    // const parsed = existing ? JSON.parse(existing) : [];
    // const updated = [...parsed, form];

    // localStorage.setItem("passwords", JSON.stringify(updated));
    // setPassArr(updated); //
    // // console.log(updated);
    // toast.success("Password Saved Successfully!", {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   transition: Bounce,
    // }); if (form.site !== '' && form.password !== '') {
      if (form.site !== "" && form.password !== "") {
        const newPassword = { ...form, id: uuidv4() };
        const updatedArray = [...PassArr, newPassword];

        setPassArr(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
        setform({ site: "", username: "", password: "" });

        toast.success("Password Saved Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } else {
        toast.error("Please enter all the fields!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
  }
// >>>>>>> 4d6624b15c0a5d27d1daa66529675bc6da95a542

      setPassArr([...PassArr, newPassword]);

      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPassword), // use same ID here
      });

      setform({ site: "", username: "", password: "" });

      toast.success("Password Saved Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Please enter all the fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  
  
  const handleChannnge = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const COPYTEXT=(e) => {
    // popup({"Copied to Clipboard","2000"});
    navigator.clipboard.writeText(e);
    // console.log(e);
    toast.success("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }
const editPassword=(id) => {

// <<<<<<< HEAD
  setform({ ...PassArr.filter((i) => i.id === id)[0], id: id });
  deletePassword(id);
  setPassArr(PassArr.filter((item) => item.id !== id));

}
  const deletePassword = async (id) => {
    console.log("Deleting password with id ", id);

    setPassArr(
      PassArr.filter((item) => item.id !== id)

    );
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

// =======
  setform(PassArr.filter((item) => item.id === id)[0]);
  setPassArr(PassArr.filter((item) => item.id !== id));
  localStorage.setItem(
    "passwords",
    JSON.stringify(PassArr.filter((item) => item.id !== id))
  );


}
//   const deletePassword = (id) => {
//     setPassArr(PassArr.filter(item => { item.id !== id }))
//     localStorage.setItem("passwords", JSON.stringify(PassArr.filter(item => item.id !== id)))
// // >>>>>>> 4d6624b15c0a5d27d1daa66529675bc6da95a542
//     toast.error("Password Deleted!", {
//       position: "bottom-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//     });
// <<<<<<< HEAD
  };
// =======

// };
// >>>>>>> 4d6624b15c0a5d27d1daa66529675bc6da95a542
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

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
                ref={passwordREf}
                type="password"
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
            Save Password
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {PassArr.map((item) => {
                    return (
                      <>
                        <tr>
                          <td className="text-center py-1  ">
                            <div className=" flex justify-center items-center">
                              <a href={item.site} target="_blank">
                                <span>{item.site}</span>
                              </a>
                              <div
                                onClick={() => COPYTEXT(item.site)}
                                className="fuck fuck flex justify-center items-center "
                              >
                                <lord-icon
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "2px ",
                                  }}
                                  src="https://cdn.lordicon.com/oiiqgosg.json"
                                  trigger="hover"
                                ></lord-icon>
                              </div>
                            </div>
                          </td>
                          <td className="text-center py-1  ">
                            <div className=" flex justify-center items-center">
                              <span>{item.username}</span>
                              <div
                                onClick={() => COPYTEXT(item.username)}
                                className="fuck flex justify-center items-center"
                              >
                                <lord-icon
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "2px ",
                                  }}
                                  src="https://cdn.lordicon.com/oiiqgosg.json"
                                  trigger="hover"
                                ></lord-icon>{" "}
                              </div>
                            </div>
                          </td>
                          <td className="text-center py-1 ">
                            <div className=" fuck flex justify-center items-center">
                              <span>{item.password}</span>
                              <div
                                onClick={() => COPYTEXT(item.password)}
                                className=" fuck flex justify-center items-center"
                              >
                                <lord-icon
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    margin: "2px ",
                                  }}
                                  src="https://cdn.lordicon.com/oiiqgosg.json"
                                  trigger="hover"
                                ></lord-icon>
                              </div>
                            </div>
                          </td>
                          <td className="justify-center py-1 border border-white text-center flex">
                            <span
                              className="cursor-pointer mx-1 fuck flex justify-center items-center"
                              onClick={() => {
                                editPassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                                style={{ width: "20px", height: "20px" }}
                              ></lord-icon>
                            </span>
                            <span
                              className="cursor-pointer mx-1 fuck flex justify-center items-center"
                              onClick={() => {
                                deletePassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                                style={{ width: "20px", height: "20px" }}
                              ></lord-icon>
                            </span>
                          </td>
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
    </>
  );
// };

export default Manager;
