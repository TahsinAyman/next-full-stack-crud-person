import React from "react";
import { fetchAllPersons } from "./service/person";
import Person from "./model/Person";
import { wait } from "./lib/wait";
import Link from "next/link";

async function Home() {  
  const persons: Person[] = await fetchAllPersons();
  await wait(2);
  return (
    <div>
      <div className="flex flex-1 justify-center p-14">
        <h1 className="text-5xl">
          People
        </h1>
      </div>
      <div className="grid p-14 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {persons.map((person: Person) => (
          <Link href={"/person/" + person.id} className="w-full cursor-pointer p-8 border border-gray-500 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <h1 className="text-3xl">ID: {person.id}</h1>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
