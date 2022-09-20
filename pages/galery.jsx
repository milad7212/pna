import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageSlide from "../components/ImageSlide";
import LineTitle from "../components/LineTitle";
import { http } from "../services/api";

function galery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await http.get(
        " https://event.bsjmajazi.ir/api/gallery/photos/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status < 400) {
        setImages(response.data);
      }
      console.log("response :>> ", response);
    }

    fetchData();
  }, []);
  return (
    <div className="px-4 ">
      <p className="my-4 text-xl font-bold text-center">گالری تصاویر</p>
      <ImageSlide />
      <div className="max-w-6xl px-4 mx-auto mb-8">
        <LineTitle title="همه تصاویر" />
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 ">
          <div className="">
            <PartImages images={images.slice(0, 3)} />

            <PartImagesTwo images={images.slice(3, 6)} />
          </div>

          <div className="">
            <PartImages images={images.slice(6, 9)} />

            <PartImagesTwo images={images.slice(9, 12)} />
          </div>

          <div className="">
            <PartImages images={images.slice(12, 15)} />

            <PartImagesTwo images={images.slice(15, 18)} />
          </div>
          <div className="">
            <PartImages images={images.slice(18, 21)} />

            <PartImagesTwo images={images.slice(21, 24)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default galery;

const PartImages = ({ images }) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 my-1 md:my-2 md:gap-2">
        <div className="col-span-2 row-span-full">
          <Image
            className="rounded-md"
            src={images[0]?.image}
            layout="responsive"
            height={100}
            width={100}
            alt=""
          />
        </div>

        <Image
          className="rounded-md"
          src={images[1]?.image}
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
        <Image
          className="rounded-md"
          src={images[2]?.image}
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
      </div>
    </>
  );
};

const PartImagesTwo = ({ images }) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-2">
        <Image
          className="rounded-md"
          src={images[0]?.image}
          layout="responsive"
          height={100}
          width={100}
          alt=""
        />
        <Image
          className="rounded-md"
          src={images[1]?.image}
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
            src={images[2]?.image}
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
