import React from "react";

export default function Toolbox() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row w-[90%] p-2 bg-zinc-100 rounded-lg mt-4 align-center text-lg">
        <button className="tool"><i class="bi bi-arrow-counterclockwise"></i></button>
        <button className="tool"><i class="bi bi-arrow-clockwise"></i></button>
        <button className="tool"><i class="bi bi-printer"></i></button>
        <p className="pl-3">|</p>
        <button className="tool">Normal Text<i class="bi bi-chevron-down pl-2"></i></button>
        <p className="pl-3">|</p>
        <button className="tool">Font<i class="bi bi-chevron-down pl-2"></i></button>
        <p className="pl-3">|</p>
        <button className="tool"><i class="bi bi-dash"></i></button>
        <input type="text" className="w-6 border border-zinc-400 outline-none rounded-md bg-zinc-100" />
        <button className="tool ml-1"><i class="bi bi-plus"></i></button>
        <p className="pl-3">|</p>
        <button className="tool"><i class="bi bi-type-bold"></i></button>
        <button className="tool"><i class="bi bi-type-italic"></i></button>
        <button className="tool"><i class="bi bi-type-underline"></i></button>
        <button className="tool"><i class="bi bi-type-strikethrough"></i></button>
        <p className="pl-3">|</p>
        <button className="tool"><i class="bi bi-palette"></i></button>
        <button className="tool"><i class="bi bi-highlighter"></i></button>
        <p className="pl-3">|</p>
        <button className="tool"><i class="bi bi-text-left"></i></button>
        <button className="tool"><i class="bi bi-text-center"></i></button>
        <button className="tool"><i class="bi bi-text-right"></i></button>
        <button className="tool"><i class="bi bi-justify"></i></button>
        <button className="tool"><i class="bi bi-list-ol"></i></button>
        <button className="tool"><i class="bi bi-list-ul"></i></button>
      </div>
    </div>
  );
}
