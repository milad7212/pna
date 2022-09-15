import Image from "next/image";
import React from "react";

function Supporters() {
  return (
    <div className="px-3 mx-auto max-w-7xl" id="supporters">
      <div className="">
        <p className="mb-6 text-xl font-bold">حامیان این دوره</p>
        <p className="leading-loose text-justify">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا
          طراحان گرافیک
        </p>
        <div className="flex justify-center gap-10">
          <Image
            src="/icon.png"
            layout="fixed"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src="/icon.png"
            layout="fixed"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src="/icon.png"
            layout="fixed"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src="/icon.png"
            layout="fixed"
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Supporters;
