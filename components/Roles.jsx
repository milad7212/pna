import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
const imageAnimat = {
  offscreen: { opacity: 0, y: 100 },
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
function Roles() {
  return (
    <div className="mx-auto my-16 max-w-7xl">
      <div className="relative border-t-2 border-indigo-200 ">
        <div className="absolute inset-0 flex justify-center -top-5">
          <p className="px-4 text-2xl font-bold bg-white text-cyan-600">
            شرایط و قوانین
          </p>
        </div>
      </div>

      <Item />
      <Item revers />
      <Item />
    </div>
  );
}

export default Roles;

function Item({ revers }) {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.5 }}
      variants={imageAnimat}
      className="grid grid-cols-1 gap-2 px-3 my-16 md:grid-cols-2"
    >
      <div className={`flex flex-col ${revers && "order-1 md:order-2"} `}>
        <p className="mb-6 text-xl font-bold text-amber-900">
          نرم افزار موبایل
        </p>
        <p className="text-justify md:leading-loose">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا
          طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی
          استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه
          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر
          می‌رسد ه‌است.
        </p>
        <button className="px-4 py-2  my-3 ml-auto mr-auto text-[#22323f] bg-[#b8c8d9] rounded-full shadow-lg md:mt-auto">
          اطلاعات بیشتر
        </button>
      </div>

      <div s className={`relative block ${revers && "order-2 md:order-1"}`}>
        <Image
          src="/img.jpg"
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
      </div>
    </motion.div>
  );
}
