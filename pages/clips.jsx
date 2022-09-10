import Image from "next/image";
import React from "react";
import LineTitle from "../components/LineTitle";

import VideosMore from "../components/VideosMore";

function clips() {
  return (
    <div className="px-2">
      <VideosMore />
      <LineTitle title="همه کلیپ ها" />
      <div className="grid grid-cols-3 gap-1 md:grid-cols-6 md:max-w-6xl md:mx-auto ">
        {Array(40)
          .fill(1)
          .map((el, index) => (
            <Image
              key={index}
              className="rounded-md"
              src="/test.jpg"
              layout="responsive"
              height={100}
              width={100}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}

export default clips;
