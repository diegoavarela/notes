import React from "react";

export default function Login({logIn}) {
  return (
<div className="bg-slate-100 w-[40%] h-[30%] z-10 flex items-center justify-center rounded-lg border-2 border-violet-500">
    <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <p className=" self-start ">email</p>
                <input type="email" className="w-full h-12 mt-2 rounded-lg outline-violet-500 pl-2" />
            </div>
        </div>
        <div className="w-[80%] flex flex-col items-center pt-8">
            <p className=" self-start ">password</p>
            <input type="password" className="w-full h-12 mt-2 rounded-lg outline-violet-500 pl-2" />
        </div>
        <div className="w-[80%] grid grid-cols-2 mt-8">
            <button onClick={logIn} className="button self-start">Cancel</button>
            <button className="button">Log In</button>
        </div>
    </div>
</div>
  );
}
