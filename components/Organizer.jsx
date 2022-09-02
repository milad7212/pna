import Image from "next/image";
import React from "react";

function Organizer() {
  return (
    <div className="max-w-7xl px-3 mx-auto my-20">
      <div className="">
      <p className="font-black text-2xl mb-20">برگزار کنندگان </p>
      <div className="flex gap-6">
        <Image src="/icon.png" layout="fixed" height={80} width={80} alt="" />
        <Image src="/icon.png" layout="fixed" height={80} width={80} alt="" />
      </div>
      <p className="mt-4">
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک
        برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
        صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده
        بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و
        اندازه‌بندی‌ها چگونه در نظر گرفته شده‌اس
      </p></div>
    </div>
  );
}

export default Organizer;
