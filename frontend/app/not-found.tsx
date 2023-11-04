import React from "react";
import { wait } from "./lib/wait";

async function NotFound() {
  return (
    <div className="fixed -z-50 top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500">Page not found</p>
    </div>
  );
}

export default NotFound;
