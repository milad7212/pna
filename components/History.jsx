import Image from "next/image";
import React from "react";
function History() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 -top-24 -right-[500px] lg:-top-80 -z-10">
        <div className="block ">
          <Image
            src="/backHistory.svg"
            layout="responsive"
            height={30}
            width={60}
            alt="0"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 px-3 bg-cover md:grid-cols-2">
        <div className="text-white">
          <Image src="/icon.png" layout="fixed" height={50} width={50} alt="" />
          <p className="font-bold">دوره های پیشین</p>
          <div className="flex flex-col max-w-max ">
            <p className="font-bold"> رویداد سراسری تولید محتوای بسیج</p>

            <button
              onClick={() => {
                route.push("/last");
              }}
              className="px-4 py-2 my-4 mr-auto bg-gray-400 rounded-md shadow-lg"
            >
              دیدن همه
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-2 h-[500px] ">
          <Item color="#ba1a1a" />

          <div className="">
            <Item color="#0e92d8" />
            <div className="h-2"></div>
            <Item color="#19408f" />
          </div>
          <div className="">
            <Item color="#5195af" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

function Item({ color }) {
  return (
    <>
      <div
        style={{ ...(color && { backgroundColor: color }) }}
        className={`px-2 py-4 text-center text-white  rounded-md max-h-min`}
      >
        <p className="my-4 text-5xl font-black ">1400</p>
        <p className="my-4 font-bold">سومین دوره مسابقات</p>
        <p className="mt-6 text-xs font-bold">(لانه جاسوسی آمریکا)</p>
      </div>
    </>
  );
}
