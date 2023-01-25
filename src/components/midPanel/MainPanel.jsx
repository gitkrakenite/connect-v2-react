import React from "react";
import "./midpanel.css";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlinePaperClip,
  AiOutlineSmile,
  AiOutlineFork,
  AiOutlineMore,
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFillChatDotsFill, BsPencil } from "react-icons/bs";

import { CiLocationOn } from "react-icons/ci";
import { ImForward } from "react-icons/im";

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
        <div className="pl-[5em] pr-[5em] pt-[2em] bg-slate-900 flex justify-between gap-[5em] h-full ">
          {/* posts */}
          <div className="flex-[0.7]  ">
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
            <div className="mt-[2em] bg-slate-800">
              {/* mainpostsWrapper */}
              <div>
                <div className="flex justify-between items-center p-[20px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-white">
                      <h1>Lucky Andreas</h1>
                      <p className="text-slate-400">
                        12 minutes ago{" "}
                        <span className="text-slate-100">
                          3D Stock Contributor
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-white flex justify-between gap-3 text-xl">
                    <AiOutlineFork className="cursor-pointer" />
                    <AiOutlineMore className="cursor-pointer" />
                  </div>
                </div>
                {/* description */}
                <div className="p-[20px]">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sed sunt soluta quos enim minus excepturi
                    voluptas laudantium deleniti? Obcaecati officiis velit fuga
                    nobis sed modi, sequi architecto placeat vero!
                  </p>
                </div>
                {/* mainImage */}
                <div>
                  <img
                    src="https://images.pexels.com/photos/1574546/pexels-photo-1574546.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className=" w-full object-cover"
                  />
                </div>
                {/* options */}
                <div className="flex items-center justify-evenly mt-[1em]">
                  <div className="flex items-center justify-between gap-[15px] text-blue-400 text-lg cursor-pointer">
                    <AiOutlineLike />
                    <p>Liked post</p>
                    <span className="bg-blue-700 text-white p-[10px] rounded-2xl">
                      1.8k
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg">
                    <AiOutlineMessage />
                    <p>Comment</p>
                    <p>45</p>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg cursor-pointer">
                    <AiOutlineShareAlt />
                    <p>Share</p>
                    <p>12</p>
                  </div>
                </div>
                {/* comments */}
                <div>
                  <div className="flex items-center justify-between p-[20px]">
                    <div className="flex text-white items-center gap-[10px] cursor-pointer">
                      <h2>All Comments</h2>
                      <AiOutlineArrowDown />
                    </div>
                    <div>
                      <p className="text-slate-400">
                        Sort by{" "}
                        <span className="text-slate-100">Most Popular</span>
                      </p>
                    </div>
                  </div>
                  {/* comments */}
                  <div className="flex gap-[20px] pl-[60px] pr-[60px] pt-[20px]">
                    {/* commentItem */}
                    <div>
                      <img
                        src="https://images.pexels.com/photos/883630/pexels-photo-883630.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="">
                      <p className="text-slate-400">
                        <span className="text-slate-100">
                          Aditya Cah Tegal :{" "}
                        </span>{" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus id quisquam nulla molestias odit culpa!
                      </p>
                      <div className="flex mt-[10px] justify-between">
                        <div className="text-slate-100 flex gap-[5px]">
                          <ImForward />
                          <p>
                            Reply Comment <span>12</span>
                          </p>
                        </div>
                        <div className="text-slate-100 flex justify-between items-center gap-[10px]">
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowUp />
                            <p>Upvote</p>
                          </div>
                          <div className="text-2xl">|</div>
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowDown />
                            <p>Downvote</p>
                          </div>
                        </div>
                      </div>
                      {/* separator */}
                      <div className="bg-slate-100 h-[1px] mt-[25px]" />
                      <div className="text-center text-blue-500 mt-[2em] cursor-pointer">
                        <p>View all comments </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* loadPosts */}
            <div className="mt-[2em] bg-slate-800">
              {/* mainpostsWrapper */}
              <div>
                <div className="flex justify-between items-center p-[20px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-white">
                      <h1>Lucky Andreas</h1>
                      <p className="text-slate-400">
                        12 minutes ago{" "}
                        <span className="text-slate-100">
                          3D Stock Contributor
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-white flex justify-between gap-3 text-xl">
                    <AiOutlineFork className="cursor-pointer" />
                    <AiOutlineMore className="cursor-pointer" />
                  </div>
                </div>
                {/* description */}
                <div className="p-[20px]">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sed sunt soluta quos enim minus excepturi
                    voluptas laudantium deleniti? Obcaecati officiis velit fuga
                    nobis sed modi, sequi architecto placeat vero!
                  </p>
                </div>
                {/* mainImage */}
                <div>
                  <img
                    src="https://images.pexels.com/photos/1574546/pexels-photo-1574546.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className=" w-full object-cover"
                  />
                </div>
                {/* options */}
                <div className="flex items-center justify-evenly mt-[1em]">
                  <div className="flex items-center justify-between gap-[15px] text-blue-400 text-lg cursor-pointer">
                    <AiOutlineLike />
                    <p>Liked post</p>
                    <span className="bg-blue-700 text-white p-[10px] rounded-2xl">
                      1.8k
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg">
                    <AiOutlineMessage />
                    <p>Comment</p>
                    <p>45</p>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg cursor-pointer">
                    <AiOutlineShareAlt />
                    <p>Share</p>
                    <p>12</p>
                  </div>
                </div>
                {/* comments */}
                <div>
                  <div className="flex items-center justify-between p-[20px]">
                    <div className="flex text-white items-center gap-[10px] cursor-pointer">
                      <h2>All Comments</h2>
                      <AiOutlineArrowDown />
                    </div>
                    <div>
                      <p className="text-slate-400">
                        Sort by{" "}
                        <span className="text-slate-100">Most Popular</span>
                      </p>
                    </div>
                  </div>
                  {/* comments */}
                  <div className="flex gap-[20px] pl-[60px] pr-[60px] pt-[20px]">
                    {/* commentItem */}
                    <div>
                      <img
                        src="https://images.pexels.com/photos/883630/pexels-photo-883630.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="">
                      <p className="text-slate-400">
                        <span className="text-slate-100">
                          Aditya Cah Tegal :{" "}
                        </span>{" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus id quisquam nulla molestias odit culpa!
                      </p>
                      <div className="flex mt-[10px] justify-between">
                        <div className="text-slate-100 flex gap-[5px]">
                          <ImForward />
                          <p>
                            Reply Comment <span>12</span>
                          </p>
                        </div>
                        <div className="text-slate-100 flex justify-between items-center gap-[10px]">
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowUp />
                            <p>Upvote</p>
                          </div>
                          <div className="text-2xl">|</div>
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowDown />
                            <p>Downvote</p>
                          </div>
                        </div>
                      </div>
                      {/* separator */}
                      <div className="bg-slate-100 h-[1px] mt-[25px]" />
                      <div className="text-center text-blue-500 mt-[2em] cursor-pointer">
                        <p>View all comments </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* loadPosts */}
            <div className="mt-[2em] bg-slate-800">
              {/* mainpostsWrapper */}
              <div>
                <div className="flex justify-between items-center p-[20px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="text-white">
                      <h1>Lucky Andreas</h1>
                      <p className="text-slate-400">
                        12 minutes ago{" "}
                        <span className="text-slate-100">
                          3D Stock Contributor
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-white flex justify-between gap-3 text-xl">
                    <AiOutlineFork className="cursor-pointer" />
                    <AiOutlineMore className="cursor-pointer" />
                  </div>
                </div>
                {/* description */}
                <div className="p-[20px]">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sed sunt soluta quos enim minus excepturi
                    voluptas laudantium deleniti? Obcaecati officiis velit fuga
                    nobis sed modi, sequi architecto placeat vero!
                  </p>
                </div>
                {/* mainImage */}
                <div>
                  <img
                    src="https://images.pexels.com/photos/1574546/pexels-photo-1574546.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className=" w-full object-cover"
                  />
                </div>
                {/* options */}
                <div className="flex items-center justify-evenly mt-[1em]">
                  <div className="flex items-center justify-between gap-[15px] text-blue-400 text-lg cursor-pointer">
                    <AiOutlineLike />
                    <p>Liked post</p>
                    <span className="bg-blue-700 text-white p-[10px] rounded-2xl">
                      1.8k
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg">
                    <AiOutlineMessage />
                    <p>Comment</p>
                    <p>45</p>
                  </div>
                  <div className="flex items-center justify-between gap-[15px] text-white text-lg cursor-pointer">
                    <AiOutlineShareAlt />
                    <p>Share</p>
                    <p>12</p>
                  </div>
                </div>
                {/* comments */}
                <div>
                  <div className="flex items-center justify-between p-[20px]">
                    <div className="flex text-white items-center gap-[10px] cursor-pointer">
                      <h2>All Comments</h2>
                      <AiOutlineArrowDown />
                    </div>
                    <div>
                      <p className="text-slate-400">
                        Sort by{" "}
                        <span className="text-slate-100">Most Popular</span>
                      </p>
                    </div>
                  </div>
                  {/* comments */}
                  <div className="flex gap-[20px] pl-[60px] pr-[60px] pt-[20px]">
                    {/* commentItem */}
                    <div>
                      <img
                        src="https://images.pexels.com/photos/883630/pexels-photo-883630.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="w-[50px] h-[50px] object-cover rounded-full"
                      />
                    </div>
                    <div className="">
                      <p className="text-slate-400">
                        <span className="text-slate-100">
                          Aditya Cah Tegal :{" "}
                        </span>{" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus id quisquam nulla molestias odit culpa!
                      </p>
                      <div className="flex mt-[10px] justify-between">
                        <div className="text-slate-100 flex gap-[5px]">
                          <ImForward />
                          <p>
                            Reply Comment <span>12</span>
                          </p>
                        </div>
                        <div className="text-slate-100 flex justify-between items-center gap-[10px]">
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowUp />
                            <p>Upvote</p>
                          </div>
                          <div className="text-2xl">|</div>
                          <div className="flex items-center gap-[8px] cursor-pointer">
                            <AiOutlineArrowDown />
                            <p>Downvote</p>
                          </div>
                        </div>
                      </div>
                      {/* separator */}
                      <div className="bg-slate-100 h-[1px] mt-[25px]" />
                      <div className="text-center text-blue-500 mt-[2em] cursor-pointer">
                        <p>View all comments </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* widgets */}
          <div className="flex-[0.3]">
            {/* top */}
            <div className="bg-slate-800 p-[10px] rounded-md">
              <div className="flex justify-between text-white mb-[2em]">
                <p>Today Trending</p>
                <AiOutlineArrowDown />
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div>
                  <p className=" text-white">Figma Maintenance</p>
                  <p className="text-slate-400">125 posts today</p>
                </div>
                <div>
                  <p className="text-slate-400">66 in 1 hour</p>
                </div>
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div>
                  <p className=" text-white">Blender Update</p>
                  <p className="text-slate-400">175 posts today</p>
                </div>
                <div>
                  <p className="text-slate-400">45 in 1 hour</p>
                </div>
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div>
                  <p className=" text-white">Stack overflow server</p>
                  <p className="text-slate-400">57 posts today</p>
                </div>
                <div>
                  <p className="text-slate-400">42 in 1 hour</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className=" text-white">Javascript new</p>
                  <p className="text-slate-400">32 posts today</p>
                </div>
                <div>
                  <p className="text-slate-400">24 in 1 hour</p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-blue-500 text-center">See all</p>
              </div>
            </div>
            {/* center */}
            <div className="mt-[2em] bg-slate-800  rounded-md">
              <div>
                <img
                  src="https://cdn.sanity.io/images/44oo3zhq/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png"
                  alt=""
                  className="w-full rounded-md"
                />
                <div className="p-[10px]">
                  <h1 className="text-slate-50 mb-[10px]">Figma Designer</h1>
                  <p className="text-slate-400 mb-[10px]">
                    1425 members 125 post/day
                  </p>
                  <p
                    className="text-center text-blue-500 mt-[15px] p-[10px] cursor-pointer rounded-md"
                    style={{ border: "1px solid gray" }}
                  >
                    Join community
                  </p>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="bg-slate-800 p-[10px] rounded-md mt-[2em]">
              <div className="flex justify-between text-white mb-[2em]">
                <p>My Friends</p>
                <AiOutlineArrowDown />
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/1543839/pexels-photo-1543839.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-[50px] h-[50px] object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-white">Mercy Krashnner</p>
                    <p className="text-slate-500">Last active recently</p>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400">12</p>
                </div>
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/1543839/pexels-photo-1543839.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-[50px] h-[50px] object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-white">Maria Jumali</p>
                    <p className="text-slate-400">Last active recently</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-white mb-[1em]">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/1543839/pexels-photo-1543839.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-[50px] h-[50px] object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-white">Michonne Flerty</p>
                    <p className="text-slate-400">Active 3hrs ago</p>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400">12</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/1543839/pexels-photo-1543839.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="w-[50px] h-[50px] object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-white">Kelvin Mascott</p>
                    <p className="text-slate-400">Last active yeaterday</p>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] cursor-pointer">
                <p className="text-blue-500 text-center">See all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
