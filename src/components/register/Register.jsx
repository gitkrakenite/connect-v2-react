import React, { useState } from "react";
import "./register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [profile, setProfile] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cPassword, setCPassword] = useState(false);

  const postDetails = () => {};

  const submitHandler = (e) => {};

  return (
    <div className="mt-[20px]">
      <form onSubmit={submitHandler} className="flex flex-col gap-[20px]">
        <input
          className="p-[10px] bg-transparent "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
          }}
          type="text"
          placeholder="Create a username here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-[10px] bg-transparent "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
          }}
          type="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="p-[10px] bg-transparent block sm:flex "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
          }}
        >
          <input
            // style={{ flex: "1" }}
            className=" mb-3 sm:mb-0 flex-[0.6]  lg:flex-[0.8]"
            type="file"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
          <span className="  flex-[0.4] lg:flex-[0.2]">
            Please upload your pic
          </span>
        </div>
        <div
          className=" bg-transparent flex "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
            gap: "10px",
          }}
        >
          <input
            className="bg-transparent p-[10px]"
            style={{ flex: "0.8", outline: "none" }}
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="p-[10px]"
            style={{ flex: "0.2", cursor: "pointer" }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <div
          className=" bg-transparent flex "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
          }}
        >
          <input
            className="bg-transparent p-[10px]"
            style={{ flex: "0.8", outline: "none" }}
            type={cPassword ? "text" : "password"}
            placeholder="Confirm your password"
          />
          <span
            onClick={() => setCPassword(!cPassword)}
            className="p-[10px]"
            style={{ flex: "0.2", cursor: "pointer" }}
          >
            {cPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          onClick={submitHandler}
          className="bg-transparent p-[10px] text-white rounded-md register-btn"
          style={{ border: "1px solid gray" }}
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Register;
