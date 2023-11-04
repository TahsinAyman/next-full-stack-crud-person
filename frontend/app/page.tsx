import React from "react";

function Home() {
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
          People
        </h1>
      </div>
      <div className="grid p-14 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {range(12).map(() => (
          <div className="w-full p-8 border border-gray-500 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <h1 className="text-3xl">ID: 1</h1>
            <p>Name: Tahsin Ayman</p>
            <p>Age: 14</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
