import Image from "next/image";
import React from "react";
import ImageSlide from "../components/ImageSlide";
import LineTitle from "../components/LineTitle";

function galery() {
  return (
    <div className="px-4 ">
      <p className="my-4 text-xl font-bold text-center">گالری تصاویر</p>
      <ImageSlide />
      <div className="max-w-6xl px-4 mx-auto mb-8">
        <LineTitle title="همه تصاویر" />
        <div className="grid grid-cols-2 gap-1 md:gap-2 ">
          <PartImages />

          <PartImages />
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-2 ">
          <PartImagesTwo />

          <PartImagesTwo />
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-2 ">
          <PartImages />

          <PartImages />
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-2 ">
          <PartImagesTwo />

          <PartImagesTwo />
        </div>
      </div>
    </div>
  );
}

export default galery;

const PartImages = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 my-1 md:my-2 md:gap-2">
        <div className="col-span-2 row-span-full">
          <Image
            className="rounded-md"
            src="/test.jpg"
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        </div>

        <Image
          className="rounded-md"
          src="/test.jpg"
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
        <Image
          className="rounded-md"
          src="/test.jpg"
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
      </div>
    </>
  );
};

const PartImagesTwo = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-2">
        <Image
          className="rounded-md"
          src="/test.jpg"
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
        <Image
          className="rounded-md"
          src="/test.jpg"
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
        <div
          style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
          className="col-span-2 row-span-full"
        >
          <Image
            className="rounded-md"
            src="/test.jpg"
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
