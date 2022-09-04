import Image from "next/image";
import Link from "next/link";
import React from "react";
const data = [
  {
    title: "اطلاعات مسابقه",
    url: "",
  },
  {
    title: "پخش زنده",
    url: "",
  },
  {
    title: "دوره های پیشین",
    url: "",
  },
  {
    title: "برگزار کنندگان",
    url: "",
  },
  {
    title: "حامیان",
    url: "",
  },
  {
    title: "گالری",
    url: "",
  },
  {
    title: "کلیپ",
    url: "",
  },
];

function Header() {
  return (
    <div className="bg-[#031B31] py-3 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl ">
        <div className="px-3 ">
          <div className="flex items-center gap-2">
            <div className="">
              <Image
                src="/icon.png"
                layout="fixed"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="text-white grow">
              <ul className="justify-center hidden md:flex">
                {data.map((item, index) => (
                  <li
                    className="mx-2 text-sm font-bold lg:text-base lg:mx-6 whitespace-nowrap"
                    key={index}
                  >
                    <Link href="">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <button className="px-6 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded-md whitespace-nowrap hover:scale-105 active:scale-90 ">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
