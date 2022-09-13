import Image from "next/image";
import React, { useEffect, useState } from "react";
import { http } from "../services/api";
function Videos() {
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
      }
    }

    fetchData();
  }, []);
  return (
    <div className="px-2 my-8 md:px-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="">
          <p className="my-8 text-xl font-bold">پخش زنده / کلیپ ها</p>
          {videos.map((item, index) => (
            <>
              <Item
                data={item}
                whichVideo={index}
                setIndexVideo={setIndexVideo}
              />
            </>
          ))}
        </div>
        <div className=" w-[70%]  mx-auto rounded-lg shadow-md">
          {videos[indexVideo]?.video && (
            <video
              controls
              className="aspect-square"
              type="video/mp4"
              src={videos[indexVideo]?.video}
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}

export default Videos;

function Item({ data, whichVideo, setIndexVideo }) {
  return (
    <div
      onClick={() => setIndexVideo(whichVideo)}
      className=" grid cursor-pointer hover:bg-gray-500  grid-cols-[50px_1fr_80px_100px] bg-gray-400 my-2 rounded-xl p-2"
    >
      <div className="">
        <Image src={data.icon} layout="fixed" width={50} height={50} alt="" />
      </div>
      <p className="mr-2 place-self-center">{data.title}</p>
      <p className=" place-self-center">{data.duration}</p>
      <div className="flex place-self-center"></div>
    </div>
  );
}
