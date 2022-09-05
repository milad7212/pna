import Image from "next/image";
import React from "react";

function about() {
  return (
    <div className="px-3 mx-auto my-4 max-w-7xl">
      <p className="my-2 font-black">درباره ما</p>
      <p className="my-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        obcaecati magnam quod quasi. Beatae ipsa eius non, fugiat voluptatum
        consectetur. Fuga dicta eos debitis dolorum provident tempore architecto
        omnis numquam!
      </p>
      <div className="flex flex-row-reverse gap-4">
        <Image src="/icon.png" layout="fixed" height={60} width={60} alt="" />
        <Image src="/icon.png" layout="fixed" height={60} width={60} alt="" />
        <Image src="/icon.png" layout="fixed" height={60} width={60} alt="" />
      </div>
    </div>
  );
}

export default about;
