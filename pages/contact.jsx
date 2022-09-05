import React from "react";

function contact() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 gap-4 m-8 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <p>تماس با ما</p>
          <p>
            اگر سوال یا مشکلی دارید از این بخش می توانید با ما در ارتباط باشید
          </p>
          <p>کافیست ثبت نام کنید </p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
          <p>موضوع ، بخش و توضیحات خود را وارد کنید و برای ما ارسال کنید</p>
        </div>
        <div className="p-4 bg-blue-900 rounded-xl">
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
            <button className="px-8 py-2 font-bold transition-all duration-200 ease-in-out bg-gray-200 active:scale-95 hover:bg-gray-100 rounded-xl">
              ارسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
