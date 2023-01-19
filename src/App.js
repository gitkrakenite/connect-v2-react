import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./screens/auth/Auth";
import Landing from "./screens/landing/Landing";
import Profile from "./screens/profile/Profile";
import Lost from "./screens/Lost";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
