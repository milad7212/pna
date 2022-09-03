import Link from "next/link";
import React from "react";

function TopHeader() {
  return (
    <div className="flex items-center justify-end text-white bg-blue-500">
      <p className="py-1 mx-2 text-sm font-black cursor-pointer hover:scale-105">
        <Link href="/contact">تماس با ما</Link>
      </p>
      <p className="py-1 mx-2 text-sm font-black cursor-pointer hover:scale-105">
        درباره ما
      </p>
      <p className="py-1 mx-2 text-sm font-black cursor-pointer hover:scale-105">
        FAQ
      </p>
    </div>
  );
}

export default TopHeader;
