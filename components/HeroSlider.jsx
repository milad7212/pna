import React from "react";

function HeroSlider() {
  return (
    <header className="relative  flex  md:h-screen  overflow-hidden">
      <video autoPlay loop muted className="absolute  w-full  ">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="z-10 md:p-12 p-4 ">
        <p className="text-white  md:text-3xl font-black">چهارمین رویداد ملی</p>
        <p className="text-white md:text-3xl font-black mt-6">
          تولید محتوای دیجیتال بسیج
        </p>
        <p className="md:w-[50%] w-[70%] text-xs text-white md:text-xl md:leading-loose text-justify mt-2 md:mt-8">
          هدف از برگزاری این رویداد سراسری برگزاری رزمایش یکپارچه بسیج متخص در
          حوزه تولید محتوای تخصصی ویژه مجازی با عنوان (مرحله مقدماتی چهارمین
          رویداد ملی تولید محتوای دیجیتال بسیج) می باشد
        </p>
        <div className="md:w-[50%]  text-white flex items-center flex-col mt-4 md:mt-24">
          <p className="md:text-md font-bold mb-2">مهلت ثبت نام</p>
          <p className="md:text-4xl font-black">۱ مهرماه تا ۱۵ مهرماه ۱۴۰۰</p>
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
