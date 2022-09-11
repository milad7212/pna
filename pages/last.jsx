import React from "react";

function last() {
  return (
    <div className="max-w-5xl px-2 mx-auto">
      <p className="my-5 mb-12 text-2xl font-bold">دوره های پیشین</p>
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default last;

const Item = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] my-5">
      <div className="flex justify-center">
        <p className="font-bold text-red-600 text-7xl">98</p>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          esse fugiat, vitae doloribus non alias ipsam atque, quis illo
          similique officia vel eius fugit soluta aspernatur nam quia voluptates
          maiores. Autem harum cumque mollitia labore ea voluptatum numquam in
          neque dolorem consectetur, corporis fugiat, vitae enim. Commodi,
          obcaecati placeat dolorem amet adipisci quos labore hic odit sapiente
          modi r reiciendis, porro nemo voluptatibus molestiae repellat
          perspiciatis officia tempore at fugit! Magni tempore dolorum a
          repellat harum alias!
        </p>
        <div className="flex justify-center my-3">
          <div className="mx-3 font-bold text-center">
            <p className="text-xl">تعداد شرکت کنندگان</p>
            <p className="mt-2 text-2xl">345</p>
          </div>
          <div className="font-bold text-center bold">
            <p className="text-xl">تعداد تیم های شرکت کننده</p>
            <p className="mt-2 text-2xl">345</p>
          </div>
        </div>
      </div>
    </div>
  );
};
