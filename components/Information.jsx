import React from "react";
import { motion } from "framer-motion";
import { MdTimer } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { useCountdown } from "../utils/useCountdown";
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
function Information() {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 10, 10));
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.0 }}
      transition={{ staggerChildren: 0.5 }}
      variants={imageAnimat}
      className="max-w-6xl px-3 mx-auto "
    >
      <div className="grid grid-cols-1 gap-y-20 gap-x-1 md:grid-cols-2 my-28">
        <motion.div
          variants={imageAnimat}
          className="relative grid grid-cols-1 p-3 py-12 shadow-2xl gap-y-2 md:grid-cols-2 md:p-8 rounded-xl backdrop-blur-md"
        >
          <div className="absolute flex px-4 py-2 bg-[#d0bfe7] rounded-full shadow-md left-[45%]  -top-5">
            <span className="inline-block">
              <MdTimer size={20} className="ml-1" />
            </span>
            زمان برگزاری
          </div>
          <p className="text-sm text-justify md:text-base md:leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-8 text-sm font-bold text-blue-800 md:text-base">
              فرصت باقی مانده تا آغاز رویداد
            </p>
            <div className="flex justify-center ">
              <DateTimeDisplay
                value={seconds}
                type={"ثانیه"}
                isDanger={false}
              />

              <p>:</p>
              <DateTimeDisplay
                value={minutes}
                type={"دقیقه"}
                isDanger={false}
              />

              <p>:</p>
              <DateTimeDisplay value={hours} type={"ساعت"} isDanger={false} />
              <p>:</p>
              <DateTimeDisplay value={days} type={"روز"} isDanger={days <= 3} />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={imageAnimat}
          className="relative grid grid-cols-2 gap-4 p-3 py-12 shadow-2xl md:p-8 rounded-xl backdrop-blur-md"
        >
          <div className="absolute px-4 py-2 flex bg-[#d0bfe7] rounded-full shadow-md left-[45%] -top-5">
            <span className="inline-block">
              <FaMapMarkerAlt size={20} className="ml-1" />
            </span>
            مکان برگزاری
          </div>
          <p className="text-sm text-justify md:text-base md:leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          </p>
          <div className="">
            <Image
              className="rounded-md"
              src="/map.jpg"
              layout="responsive"
              height={120}
              width={100}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Information;

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="flex flex-col items-center mx-1 font-bold text-blue-800">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
