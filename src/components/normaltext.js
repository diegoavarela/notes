import React from "react";

export default function NormalText() {
    return (
        <div className="absolute top-[27px] left-[12px] flex flex-col shadow-lg overflow-visible ">
            <button className="normal-text rounded-t-md"><p className="text-xs text-nowrap">Normal Text</p></button>
            <button className="normal-text"><p className=" text-sm">Title</p></button>
            <button className="normal-text"><p className=" text-base">Subtitle</p></button>
            <button className="normal-text"><h1 className=" text-lg text-nowrap">Heading 1</h1></button>
            <button className="normal-text"><h2 className=" text-xl text-nowrap">Heading 2</h2></button>
            <button className="normal-text rounded-b-md"><h3 className=" text-2xl text-nowrap">Heading 3</h3></button>
        </div>
    )
}