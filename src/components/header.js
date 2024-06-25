import React from "react";

export default function Header() {
  return (
    <div className=" bg-violet-300 flex flex-row w-screen shadow-md">
      <div className="w-[100%] p-4">
        <h1 className="text-3xl">
          <i class="bi bi-pencil pr-2"></i>Notes Taker
        </h1>
        <p className="pl-9">Take notes on the go</p>
      </div>
      <div className="flex flex-row justify-end w-[100%] pr-4 items-center">
        <button className="mr-4">Log In</button>
        <button className=" bg-violet-600 h-10 pl-4 pr-4 rounded-lg text-white hover:bg-violet-400">Sign Up</button>
      </div>
    </div>
  );
}
