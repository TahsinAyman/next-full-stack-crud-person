import React from "react";
import { wait } from "./lib/wait";
import Center from "./lib/Center";

async function NotFound() {
  return (
    <Center>
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500">Page not found</p>
    </Center>
  );
}

export default NotFound;
