import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
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
    url: "/last",
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
    url: "/galery",
  },
  {
    title: "کلیپ",
    url: "/clips",
  },
];
const dataMobile = [
  {
    title: "صفحه اصلی",
    url: "/",
  },
  {
    title: "اطلاعات رویداد",
    url: "/roles",
  },
  {
    title: "پخش زنده",
    url: "",
  },
  {
    title: "دوره های پیشین",
    url: "/last",
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
    url: "/galery",
  },
  {
    title: "کلیپ ها",
    url: "/clips",
  },
  {
    title: "تماس با ما",
    url: "/contact",
  },
  {
    title: "درباره ما",
    url: "/about",
  },
  {
    title: "FAQ",
    url: "",
  },
];

function Header({ changeColor }) {
  const [showSlideMenu, setShowSlideMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className={`${
          !changeColor ? "bg-blue-500" : "bg-[#031B31]"
        } py-2 sticky top-0 z-50`}
      >
        <div className="mx-auto max-w-7xl ">
          <div className="px-3 ">
            <div className="flex items-center justify-between gap-2">
              <div
                onClick={() => setShowSlideMenu(true)}
                className="block cursor-pointer lg:hidden"
              >
                <HiMenu size={35} color="#fff" />
              </div>
              <Link href="/">
                <div className="flex items-center justify-center cursor-pointer ">
                  <Image
                    src="/logo-roydad.png"
                    layout="fixed"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <Image
                    src="/logo-roydader.png"
                    layout="fixed"
                    width={100}
                    height={50}
                    alt=""
                  />
                </div>
              </Link>
              <div className="hidden text-white grow lg:block">
                <ul className="justify-center lg:flex">
                  {data.map((item, index) => (
                    <li
                      className="mx-1 text-sm font-bold lg:text-base lg:mx-2 whitespace-nowrap"
                      key={index}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="px-6 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded-md opacity-0 lg:opacity-100 whitespace-nowrap hover:scale-105 active:scale-90 ">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div
        className={`inset-0 ${showSlideMenu ? "fixed " : "hidden"} ]  z-[100]`}
      >
        <div className="grid grid-cols-[5fr_2fr]">
          <div className="bg-[#cbe6ff] h-screen">
            <div className="flex justify-center py-6">
              <Image
                src="/logo-roydad.png"
                layout="fixed"
                width={70}
                height={70}
                alt=""
              />
            </div>
            <ul className="">
              {dataMobile.map((item, index) => (
                <li
                  onClick={() => {
                    router.push(item.url);
                    setShowSlideMenu(false);
                  }}
                  className="py-4 mx-2 text-sm font-bold lg:text-base lg:mx-6 whitespace-nowrap"
                  key={index}
                >
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => setShowSlideMenu(false)}></div>
        </div>
      </div>
    </>
  );
}

export default Header;

function Menu() {
  return (
    <>
      <nav className="flex flex-col space-y-1">
        <a
          href=""
          className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> General </span>
        </a>

        <a
          href=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> Teams </span>
        </a>

        <a
          href=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> Billing </span>
        </a>

        <a
          href=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> Invoices </span>
        </a>

        <a
          href=""
          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> Account </span>
        </a>
      </nav>
    </>
  );
}
