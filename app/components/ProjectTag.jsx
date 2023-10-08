import React from "react";

const Projecttag = ({ onClick, name, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-green-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
    className={`${buttonStyles} border-2 rounded-full  px-6 py-2 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Projecttag;
