import Image from "next/image";
import React from "react";

function Videos() {
  return (
    <div className="px-2 my-8 md:px-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="">
          <p className="my-8 text-xl font-bold">پخش زنده / کلیپ ها</p>
          <Item />
          <Item />
          <Item />
        </div>
        <div className="bg-gray-500 w-[70%] aspect-square mx-auto rounded-lg shadow-md"></div>
      </div>
    </div>
  );
}

export default Videos;

function Item() {
  return (
    <div className="grid   grid-cols-[50px_1fr_80px_100px] bg-gray-400 my-2 rounded-xl p-2">
      <div className="">
        <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
      </div>
      <p className="mr-2 place-self-center">فیلم</p>
      <p className=" place-self-center">25:12</p>
      <div className="flex place-self-center">icons</div>
    </div>
  );
}
