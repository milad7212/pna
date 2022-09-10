import Image from "next/image";
import React from "react";

function VideosMore() {
  return (
    <div className="px-2 my-8 md:px-20">
      <p className="my-8 text-xl font-bold">پخش زنده / کلیپ ها</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-gray-500 w-[70%] aspect-square mx-auto rounded-lg shadow-md"></div>

        <div className="grid grid-cols-3 gap-1">
          {[1, 1, 1, 1, 1, 1].map((el, index) => (
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
    </div>
  );
}

export default VideosMore;
