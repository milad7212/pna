import Image from "next/image";
import React from "react";

function Roles() {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="border-t-2 border-indigo-200 relative ">
        <div className="absolute inset-0 flex justify-center -top-5">
          <p className="bg-white px-4 text-cyan-600 text-2xl font-bold">
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
    <div className="my-16 grid grid-cols-1 gap-2 md:grid-cols-2">
      {revers && (
        <div className="relative block">
          <Image
            src="/img.jpg"
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col ">
        <p className=" text-amber-900 text-xl mb-6 font-bold">
          نرم افزار موبایل
        </p>
        <p className="leading-loose">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا
          طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی
          استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه
          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر
          می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی
          که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را
          ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با
          استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا
          مرحله طراحی و صفحه‌بندی را به پایان برند.
        </p>
        <button className="bg-blue-800 shadow-md   py-2 px-4  mt-auto mr-auto ml-3 rounded-md text-blue-300">
          اطلاعات بیشتر
        </button>
      </div>
      {!revers && (
        <div className="relative block">
          <Image
            src="/img.jpg"
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
