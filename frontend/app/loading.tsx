import React from "react";
import Skeleton from "./lib/Skeleton";

function Loading() {
  const range = (n: number) => {
    let lst = [];
    for (let i = 1; i <= n; i++) {
      lst.push(i);
    }
    return lst;
  };

  return (
    <div>
      <div className="flex flex-1 justify-center p-14">
        <h1 className="text-5xl">
          <Skeleton width={52} height={16} radius="xl" />
        </h1>
      </div>
      <div className="grid p-14 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {range(12).map(() => (
          <div className="animate-pulse flex space-x-4">
            <div
              className="bg-gray-400 rounded-xl w-full"
              style={{
                height: 300,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
