import React, { useState } from "react";
import "./auth.css";
import logo from "../../assets/CN.png";
import bgVideo from "../../assets/main.mp4";
import Register from "../../components/register/Register";
import Login from "../../components/login/Login";
import { AiOutlinePhone } from "react-icons/ai";

const Auth = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/*  */}
      <div className="w-full h-screen relative">
        <video
          src={bgVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-screen object-cover"
        />
      </div>

      {/* overlay */}
      <div
        className="w-full h-screen absolute top-0 left-0 right-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        {/* forms */}
        <div className=" relative flex flex-col z-50  w-[90%] sm:w-[80%] m-auto">
          <div />
          <div className="hidden sm:flex text-center justify-center mt-[1.7em]">
            <img
              src={logo}
              style={{
                width: "200px",
                display: "flex",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              alt=""
            />
          </div>
          {/* separator 1 */}
          <div className="sm:hidden" />

          {/* conditional rendering */}
          <div className=" w-[100%] sm:w-[90%] lg:w-[60%] m-auto">
            {show ? <Register /> : <Login />}
          </div>

          {/* separator */}
          <div className="mt-[10px] mb-[10px]" />
          {/* footer */}
          <div className=" w-[100%] sm:w-[90%] lg:w-[60%] m-auto bg-slate-200 p-[3em] rounded-md">
            {show ? (
              <div className=" block sm:flex items-center gap-[1em] justify-between cursor-pointer">
                <h1 className=" mb-3 sm:mb-0 text-lg">
                  Not new here ?{" "}
                  <span
                    className="cursor-pointer hover:font-bold"
                    onClick={() => setShow(false)}
                  >
                    Login
                  </span>
                </h1>
                <div className="flex items-center gap-[1em]">
                  <AiOutlinePhone className="text-[24px]" />
                  <h1 className="text-lg">Sign Up with phone ?</h1>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-lg">
                  Are you new here ?{" "}
                  <span
                    className="cursor-pointer hover:font-bold"
                    onClick={() => setShow(true)}
                  >
                    Get started
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
