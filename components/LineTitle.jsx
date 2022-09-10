import Image from "next/image";
import React from "react";

function LineTitle({ title }) {
  return (
    <div className="flex items-center my-5 ">
      <p className="font-bold">{title}</p>
      <div className="h-[1px] bg-gray-600 border grow"></div>
    </div>
  );
}

export default LineTitle;
