import React from "react";
import "./midpanel.css";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlinePaperClip,
  AiOutlineSmile,
} from "react-icons/ai";
import { BsFillChatDotsFill, BsPencil } from "react-icons/bs";

import { CiLocationOn } from "react-icons/ci";

const MainPanel = () => {
  return (
    <div className="ml-[1px] ">
      <div>
        {/* topBar */}
        {/* maintopBar */}
        <div className=" bg-slate-800 p-[20px] flex items-center justify-between">
          {/* lefttopbar */}
          <div className="flex gap-[4em]">
            <div className="flex items-center gap-[20px] cursor-pointer">
              <AiFillHome className="text-[25px] text-slate-50" />
              <p className="text-[18px] text-slate-50">Home</p>
            </div>
            <div>
              <ul className="flex gap-[20px] items-center text-slate-50 bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md">
                <li className="cursor-pointer">Explore</li>
                <li className="cursor-pointer">Community feed</li>
                <li className="cursor-pointer">Mutual Friends</li>
              </ul>
            </div>
          </div>
          {/*  righttopBar*/}
          <div>
            <div className="flex gap-[20px] items-center ">
              <div className="cursor-pointer  bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md">
                <BsFillChatDotsFill className="text-slate-50 text-[24px]" />
              </div>
              <div className="cursor-pointer  bg-slate-700 pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md">
                <AiOutlineBell className="text-slate-50 text-[24px]" />
              </div>
              <div className="flex gap-[20px] items-center cursor-pointer">
                <span className="text-slate-50 text-[17px]">John K</span>
                <img
                  src="https://images.pexels.com/photos/14397668/pexels-photo-14397668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="pl-[5em] pr-[5em] pt-[2em] bg-slate-900 flex gap-[5em] h-full ">
          {/* posts */}
          <div className="flex-[0.7] ">
            {/* createPost */}
            <form className="bg-slate-800 p-[26px] rounded-sm">
              <div>
                {/* topcreatePost */}
                <div className="flex gap-[20px] items-center">
                  <div className="">
                    <img
                      src="https://images.pexels.com/photos/14397668/pexels-photo-14397668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                      className="w-[50px] h-[50px] object-cover rounded-full "
                      alt=""
                    />
                  </div>
                  <div className="flex-[1]">
                    <input
                      className="w-[100%] bg-slate-700 text-slate-50 p-[10px] rounded-3xl outline-none"
                      type="text"
                      placeholder="What's on your mind ?"
                    />
                  </div>
                </div>
                {/* bottomcreatePost */}
                <div className="flex items-center justify-between mt-[3em] flex-[0.8]">
                  <div className="flex gap-[10px]">
                    <div className="flex cursor-pointer">
                      <input type="file" className="text-slate-50" />
                    </div>
                    <AiOutlinePaperClip className="text-slate-50 text-2xl cursor-pointer" />
                    <CiLocationOn className="text-slate-50 text-2xl cursor-pointer" />
                    <AiOutlineSmile className="text-slate-50 text-2xl cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[20px] text-slate-50 cursor-pointer">
                      <BsPencil />
                      <p>Draft</p>
                    </div>
                    <button
                      className="text-slate-50 cursor-pointer rounded-md"
                      style={{ border: "1px solid gray", padding: " 5px 20px" }}
                      type="submit"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* loadPosts */}
            <div>dsd</div>
          </div>
          {/* widgets */}
          <div className="flex-[0.2]">
            <img
              src="https://images.pexels.com/photos/14397668/pexels-photo-14397668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              className="w-[100%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
