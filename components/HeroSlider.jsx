import React from "react";
import { motion } from "framer-motion";

const imageAnimat = {
  offscreen: { opacity: 0, y: -100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

function HeroSlider() {
  return (
    <motion.header
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      variants={imageAnimat}
      className="relative flex overflow-hidden md:h-screen"
    >
      <video autoPlay loop muted className="absolute w-full ">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="z-10 p-4 md:p-12 ">
        <p className="font-black text-white md:text-3xl">چهارمین رویداد ملی</p>
        <p className="mt-6 font-black text-white md:text-3xl">
          تولید محتوای دیجیتال بسیج
        </p>
        <p className="md:w-[50%] w-[70%] text-xs text-white md:text-xl md:leading-loose text-justify mt-2 md:mt-8">
          هدف از برگزاری این رویداد سراسری برگزاری رزمایش یکپارچه بسیج متخص در
          حوزه تولید محتوای تخصصی ویژه مجازی با عنوان (مرحله مقدماتی چهارمین
          رویداد ملی تولید محتوای دیجیتال بسیج) می باشد
        </p>
        <div className="md:w-[50%]  text-white flex items-center flex-col mt-4 md:mt-24">
          <p className="mb-2 font-bold md:text-md">مهلت ثبت نام</p>
          <p className="font-black md:text-4xl">۱ مهرماه تا ۱۵ مهرماه ۱۴۰۰</p>
          <div className="flex gap-2 mt-8">
            <button className="px-4 py-2 font-bold text-blue-900 bg-blue-400 rounded-md">
              اطلاعات رویداد
            </button>
            <button className="px-4 py-2 border-2 rounded-md">پخش زنده</button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeroSlider;
