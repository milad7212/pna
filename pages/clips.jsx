import Image from "next/image";
import React, { useEffect, useState } from "react";
import LineTitle from "../components/LineTitle";

import VideosMore from "../components/VideosMore";
import { http } from "../services/api";

function clips() {
  const [videos, setVideos] = useState([]);
  const [indexVideo, setIndexVideo] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await http.get(
        " https://event.bsjmajazi.ir/api/gallery/videos/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status < 400) {
        setVideos(response.data);
        console.log("response.data", response.data);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="px-2">
      <div className="px-2 my-8 md:px-20">
        <p className="my-8 text-xl font-bold">پخش زنده / کلیپ ها</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-gray-500 w-[70%] aspect-square mx-auto rounded-lg shadow-md">
            {videos[indexVideo]?.video && (
              <video
                controls
                className="aspect-square"
                type="video/mp4"
                src={videos[indexVideo]?.video}
              ></video>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1">
            {videos.map((el, index) => (
              <div key={index} onClick={() => setIndexVideo(index)}>
                <Image
                  className="rounded-md"
                  src={el.icon}
                  layout="responsive"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <LineTitle title="همه کلیپ ها" />
      <div className="grid grid-cols-3 gap-1 md:grid-cols-6 md:max-w-6xl md:mx-auto ">
        {videos.map((el, index) => (
          <div key={index} onClick={() => setIndexVideo(index)}>
            <Image
              className="rounded-md"
              src={el.icon}
              layout="responsive"
              height={100}
              width={100}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default clips;
