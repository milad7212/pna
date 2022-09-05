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
function About() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      variants={imageAnimat}
      className="max-w-6xl px-3 mx-auto "
    >
      <div className="p-4 text-justify shadow-2xl rounded-xl md:mt-4 backdrop-blur-2xl">
        <p className="mt-2 mb-4 font-bold text-white md:text-2xl ">
          درباره رویداد
        </p>
        <p className="text-white md:leading-loose md:font-bold ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        </p>
      </div>
    </motion.div>
  );
}

export default About;
