import React from 'react'

import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
const Editor = () => {
  return (
    <div className="ml-8">
      <div className=" mt-8">
        <span className="font-extrabold text-xl">Dshaboard</span>{" "}
        <span className="ml-2">Editor</span>
      </div>
      <div
        className="flex  items-center"
        style={{ justifyContent: "space-between" }}
      >
        <div className="mt-4 flex items-center border border-indigo-600 w-20 h-7 p-4 rounded-lg bg-blue-700 hover:bg-cyan-900 text-white cursor-pointer ">
          <span className="">New</span>
          <span className="ml-2">
            <AiOutlinePlus />
          </span>
        </div>
        <div className="flex border border-indigo-600 h-10 w-96 items-center rounded-lg text-gray-700">
          <HiOutlineSearch className="ml-3" />
          <input
            placeholder="Search"
            className="focus:outline-none w-full  ml-2"
          />
        </div>
        <div style={{ display: "flex" }} className="rounded-r-lg">
          <button className="text-3xl mr-3 border-t-4 border-indigo-500 border-l-4 border-indigo-500 border-b-4 border-indigo-500 bg-blue-500 active:bg-blue-600 pl-2 pr-2 rounded-lg">
            <HiMenu />
          </button>
          <button className="text-3xl rounded-lg mr-4 border-t-4 border-indigo-500 border-r-4 border-indigo-500 border-b-4 border-indigo-500 bg-blue-500 active:bg-blue-600 pr-2 pl-2">
            <CgMenuGridR />
          </button>
        </div>
      </div>

      <div
        className="mt-4 bg-neutral-300 z-40  w-auto  mx-w-md mr-4 rounded-lg  border  border-600"
        style={{ height: "80vh" /*  backgroundColor:'#242424' */ }}
      >
        <h1 className="mt-16 ml-12 text-2xl">
          Please click on new to start creating a new CPD
        </h1>
      </div>
    </div>
  );
};

export default Editor;
