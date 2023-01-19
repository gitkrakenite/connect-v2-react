import React from "react";
import "./leftpanel.css";
import logo from "../../assets/CN.png";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiNews } from "react-icons/bi";

const LeftPanel = () => {
  return (
    <div className="">
      {/* mainDiv */}
      <div
        className=" p-[3em] bg-slate-800 h-screen overflow-y-scroll hide-scrollbar"
        style={{ scrollbarWidth: "0px" }}
      >
        {/* first section */}
        <div className="">
          <div className="cursor-pointer flex items-center gap-[1em] mb-[20px] ">
            <img className="w-[90px] rounded-full " src={logo} alt="" />
            <h1 style={{ fontSize: "20px" }} className="text-gray-50">
              Connect
            </h1>
          </div>
          <div className="flex items-center gap-[1em] mb-[20px] bg-slate-700 p-[10px] rounded-md text-gray-100">
            <AiOutlineSearch style={{ fontSize: "20px" }} />
            <span style={{ fontSize: "16px" }}>Explore Connect</span>
          </div>
          <div>
            <ul>
              <li className="flex gap-[20px] items-center mb-[15px] text-lg text-gray-400 hover:text-gray-300 cursor-pointer">
                <AiFillHome />
                <span>Home</span>
              </li>
              <li className="flex gap-[20px] items-center mb-[15px] text-lg text-gray-400 hover:text-gray-300 cursor-pointer">
                <AiOutlineUsergroupAdd />
                <span>Community</span>
              </li>
              <li className="flex gap-[20px] items-center mb-[15px] text-lg text-gray-400 hover:text-gray-300 cursor-pointer">
                <BsBag />
                <span>Marketplace</span>
                <span>4 new offers</span>
              </li>
              <li className="flex gap-[20px] items-center mb-[15px] text-lg text-gray-400 hover:text-gray-300 cursor-pointer">
                <AiOutlineCalendar />
                <span>Connect Events</span>
              </li>
              <li className="flex gap-[20px] items-center mb-[15px] text-lg text-gray-400 hover:text-gray-300 cursor-pointer">
                <BiNews />
                <span>News Feed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* separator */}
        <div className="h-[1px] bg-slate-300 mt-[30px] mb-[20px]" />

        {/* sec part */}
        <div>
          <div className="flex gap-[20px] text-gray-50 justify-between">
            <h1>My community</h1>
            <span> 29 </span>
          </div>
          {/*  */}
          <div className="flex gap-[20px] text-gray-100 mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src="https://images.pexels.com/photos/14518593/pexels-photo-14518593.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
            <div>
              <p>Indonesia UI Designer</p>
              <p>734 members</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-[20px] text-gray-100 mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src="https://images.pexels.com/photos/11350818/pexels-photo-11350818.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
            <div>
              <p>Daystar University</p>
              <p>6789 members</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-[20px] text-gray-100 mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src="https://images.pexels.com/photos/14011484/pexels-photo-14011484.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
            <div>
              <p>Indonesia Website De...</p>
              <p>420 members</p>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="h-[1px] bg-slate-300 mt-[30px] mb-[20px]" />
        {/* third part */}
        <div className="mt-[20px]">
          <div className="flex gap-[20px] text-gray-50 justify-between">
            <h1>Upcoming events</h1>
            <span> 12 </span>
          </div>
          {/*  */}
          <div>
            {/*  */}
            <div className="flex items-center gap-[20px] text-gray-100 mt-[20px]">
              <div className="bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md flex flex-col">
                <p>20</p>
                <p>Dec</p>
              </div>
              <div>
                <p>Product Designer</p>
                <p className="text-sm text-gray-400">
                  78k interested . 7.2k going
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-[20px] text-gray-100 mt-[20px]">
              <div className="bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md flex flex-col">
                <p>28</p>
                <p>Jan</p>
              </div>
              <div>
                <p>Cyber Security</p>
                <p className="text-sm text-gray-400">
                  12k interested . 5.2k going
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-[20px] text-gray-100 mt-[20px]">
              <div className="bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md flex flex-col">
                <p>10</p>
                <p>Feb</p>
              </div>
              <div>
                <p>Web Royalty</p>
                <p className="text-sm text-gray-400">
                  80k interested . 7.2k going
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
