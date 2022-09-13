import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import { http } from "../services/api";
function ImageSlide() {
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
      console.log("response :>> ", response);
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-8 ">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Scrollbar, A11y]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        grabCursor={true}
        spaceBetween={1}
        navigation
        pagination={true}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            className="rounded-xl"
            src="/test.jpg"
            layout="responsive"
            height={300}
            width={300}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-xl"
            src="/test.jpg"
            layout="responsive"
            height={300}
            width={300}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-xl"
            src="/test.jpg"
            layout="responsive"
            height={300}
            width={300}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-xl"
            src="/test.jpg"
            layout="responsive"
            height={300}
            width={300}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-xl"
            src="/test.jpg"
            layout="responsive"
            height={300}
            width={300}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlide;
