import React from "react";

export default function Editor() {
    return (
        <div className="flex justify-center">
        <div className="w-[90%] h-[500px] border border-zinc-300 rounded-lg mt-4  bg-zinc-100">
            <div className="p-4">
                <textarea className="w-full h-full outline-none bg-zinc-100" placeholder="Start typing your notes here..."></textarea>
            </div>
        </div>
        </div>
    )
}