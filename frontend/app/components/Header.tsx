import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="py-6 z-50 shadow-2xl px-8 bg-blue-500 flex">
      <div className="flex-1">
        <Link href="/">
          <h1 className="text-white text-3xl font-bold">Person</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/new" className="text-white">
          Add
        </Link>
      </div>
    </div>
  );
}

export default Header;
