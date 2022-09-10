import React from "react";
import { HiMail } from "react-icons/hi";
import {
  AiTwotonePhone,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
function contact() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 m-8 md:grid-cols-2">
        <div className="flex flex-col space-y-4 ">
          <p className="text-lg font-bold">تماس با ما</p>
          <p>
            اگر سوال یا مشکلی دارید از این بخش می توانید با ما در ارتباط باشید
          </p>
          <p>کافیست ثبت نام کنید </p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
          <div className="flex items-center text-gray-800">
            <HiMail size={20} />
            <span className="mt-1 mr-2 font-bold">event.info@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-800">
            <AiTwotonePhone size={20} />
            <span className="mt-1 mr-2 font-bold">021-25252525</span>
          </div>
          <div className="flex items-center text-gray-800">
            <FaMapMarkerAlt size={20} />
            <span className="mt-1 mr-2 font-bold">
              تهران- میدان فردوسی-کوچه2
            </span>
          </div>
        </div>
        <div className="p-4 bg-[#003450] rounded-xl">
          <p className="font-bold text-white">موضوع</p>
          <input type="text" className="w-full py-3 my-4 rounded-xl" />

          <p className="font-bold text-white">بخش</p>
          <input type="text" className="w-full py-3 my-4 rounded-xl" />

          <p className="font-bold text-white"> توضیحات</p>
          <textarea
            rows={5}
            type="text"
            className="w-full py-3 my-4 rounded-xl"
          />
          <div className="flex justify-center">
            <button className="px-8 py-2 font-bold transition-all duration-200 ease-in-out bg-[#b8c8d9] active:scale-95 hover:bg-gray-100 rounded-xl">
              ارسال
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <AiOutlineTwitter size={30} className="ml-6" />
        <AiOutlineInstagram size={30} className="ml-6" />
        <FaTelegramPlane size={30} className="ml-6" />
      </div>
    </div>
  );
}

export default contact;
