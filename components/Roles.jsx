import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
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
    <div className="mx-auto max-w-7xl">
      <div className="relative border-t-2 border-indigo-200 ">
        <div className="absolute inset-0 flex justify-center -top-5">
          <p className="px-4 text-2xl font-bold bg-white text-cyan-600">
            بخش های رویداد
          </p>
        </div>
      </div>

      <Item
        img="/one.svg"
        text="میتوان متن متغییر وارد نمود"
        title="عنوان متغییر"
      />
      <Item
        revers
        img="/two.svg"
        text="میتوان متن متغییر وارد نمود"
        title="عنوان متغییر"
      />
      <Item
        img="/three.svg"
        text="میتوان متن متغییر وارد نمود"
        title="عنوان متغییر"
      />
    </div>
  );
}

export default Roles;

function Item({ revers, img, text, title }) {
  const route = useRouter();
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
        <p className="mb-6 text-xl font-bold text-amber-900">{title}</p>
        <p className="text-justify md:leading-loose">{text}</p>
        <button
          onClick={() => {
            route.push("/roles");
          }}
          className="px-4 py-2  my-3 ml-auto mr-auto text-[#22323f] bg-[#b8c8d9] rounded-md shadow-lg md:mt-auto"
        >
          اطلاعات بیشتر
        </button>
      </div>

      <div s className={`relative block ${revers && "order-2 md:order-1"}`}>
        <Image src={img} layout="responsive" height={100} width={100} alt="" />
      </div>
    </motion.div>
  );
}
