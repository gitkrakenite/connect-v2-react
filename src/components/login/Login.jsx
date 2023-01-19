import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = () => {};
  return (
    <div className="mt-[20px]">
      <form className="flex flex-col gap-[20px]" onClick={submitHandler}>
        <input
          className="p-[10px] bg-transparent "
          style={{
            color: "white",
            fontSize: "18px",
            borderBottom: "1px solid white",
          }}
          type="text"
          placeholder="Enter your username here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
            style={{ flex: "0.8" }}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        <button
          onClick={submitHandler}
          className="bg-transparent p-[10px] text-white rounded-md register-btn"
          style={{ border: "1px solid gray" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
