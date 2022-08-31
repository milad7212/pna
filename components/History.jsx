import Image from "next/image";
import React from "react";

function History() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div
        className="flex gap-2  items-center justify-center
      "
      >
        <Item />

        <div className="">
          <Item />
          <div className="h-2"></div>
          <Item />
        </div>
        <div className="">
          <Item />
        </div>
      </div>
      <div className="">
        <Image src="/icon.png" layout="fixed" height={50} width={50} alt="" />
        <p className="font-bold">دوره های پیشین</p>
        <div className="flex flex-col max-w-max ">
          <p className="font-bold"> رویداد سراسری تولید محتوای بسیج</p>

          <button className="bg-gray-400 py-2 px-4 shadow-lg rounded-md mr-auto my-4">
            دیدن همه
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;

function Item() {
  return (
    <>
      <div className="bg-blue-800 px-2 py-4 rounded-md text-white text-center max-h-min">
        <p className="my-4 font-bold  text-3xl">1400</p>
        <p className="my-4">سومین دوره مسابقات</p>
        <p className="mt-6 text-xs">(لانه جاسوسی آمریکا)</p>
      </div>
    </>
  );
}
