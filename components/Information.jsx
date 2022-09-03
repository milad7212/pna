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
function Information() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ staggerChildren: 0.5 }}
      variants={imageAnimat}
      className="max-w-6xl px-3 mx-auto "
    >
      <div className="grid grid-cols-1 gap-y-20 gap-x-1 md:grid-cols-2 my-28">
        <motion.div
          variants={imageAnimat}
          className="relative p-3 py-12 shadow-2xl md:p-8 rounded-xl backdrop-blur-md"
        >
          <div className="absolute px-4 py-2 bg-red-300 rounded-md shadow-md -top-5">
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
        </motion.div>

        <motion.div
          variants={imageAnimat}
          className="relative p-3 py-12 shadow-2xl md:p-8 rounded-xl backdrop-blur-md"
        >
          <div className="absolute px-4 py-2 bg-red-300 rounded-md shadow-md -top-5">
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Information;
