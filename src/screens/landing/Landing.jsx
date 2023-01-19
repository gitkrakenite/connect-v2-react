import React from "react";
import LeftPanel from "../../components/leftPanel/LeftPanel";
import MainPanel from "../../components/midPanel/MainPanel";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      {/* main div */}
      <div className="flex m-auto">
        {/* leftPanel */}
        <div className="flex-[0.2]">
          <LeftPanel />
        </div>
        {/* mainPanel */}
        <div className="flex-[0.8]">
          <MainPanel />
        </div>
      </div>
    </div>
  );
};

export default Landing;
