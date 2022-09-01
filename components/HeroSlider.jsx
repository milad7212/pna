import React from "react";

function HeroSlider() {
  return (
    <header className="relative  flex   h-screen  overflow-hidden">
      <video autoPlay loop muted className="absolute  w-full  ">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="z-10 p-12 ">
        <p className="text-white text-3xl font-black">چهارمین رویداد ملی</p>
        <p className="text-white text-3xl font-black mt-6">
          تولید محتوای دیجیتال بسیج
        </p>
        <p className="w-[50%] text-white text-xl leading-loose text-justify mt-8">
          هدف از برگزاری این رویداد سراسری برگزاری رزمایش یکپارچه بسیج متخص در
          حوزه تولید محتوای تخصصی ویژه مجازی با عنوان (مرحله مقدماتی چهارمین
          رویداد ملی تولید محتوای دیجیتال بسیج) می باشد
        </p>
        <div className="w-[50%] text-white flex items-center flex-col mt-24">
          <p className="text-md font-bold mb-2">مهلت ثبت نام</p>
          <p className="text-4xl font-black">۱ مهرماه تا ۱۵ مهرماه ۱۴۰۰</p>
          <div className="flex gap-2 mt-8">
            <button className="bg-blue-400 py-2 px-4 rounded-md text-blue-900 font-bold">اطلاعات رویداد</button>
            <button className="py-2 px-4 border-2 rounded-md">پخش زنده</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSlider;
