import Image from "next/image";
import React from "react";
function History() {
  return (
    <div className="grid grid-cols-1 px-3 md:grid-cols-2">
      <div
        className="flex items-center justify-center gap-2 "
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

          <button className="px-4 py-2 my-4 mr-auto bg-gray-400 rounded-md shadow-lg">
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
      <div className="px-2 py-4 text-center text-white bg-blue-800 rounded-md max-h-min">
        <p className="my-4 text-3xl font-bold">1400</p>
        <p className="my-4">سومین دوره مسابقات</p>
        <p className="mt-6 text-xs">(لانه جاسوسی آمریکا)</p>
      </div>
    </>
  );
}
