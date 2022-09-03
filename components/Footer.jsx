import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="grid px-4 py-6 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 md:grid-cols-3 ">
      <div className="flex flex-col justify-between">
        <p>تماس با ما</p>
        <div className="flex">
          <p>021-88928214</p>
          <p>021-88928215</p>
        </div>
        <p>استان تهران، تهران، منطقه 6، خیابان طالقانی</p>
        <div className="flex">
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p>درباره ما</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        </p>
        <div className="mr-auto">
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
          <Image src="/icon.png" layout="fixed" width={50} height={50} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src="/icon.png" layout="fixed" width={200} height={200} alt="" />
      </div>
    </div>
  );
}

export default Footer;
