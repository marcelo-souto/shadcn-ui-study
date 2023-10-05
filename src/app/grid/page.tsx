import React from "react";

export default function GridPage() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,256px))] gap-6 mx-auto max-w-[1320px] justify-center">
      {Array.from({ length: 10 }).map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-zinc-700 aspect-square rounded-xl"
        >
          <p className="font-bold text-4xl">{index}</p>
        </div>
      ))}
    </div>
  );
}
