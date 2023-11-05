"use client";
import Center from "@/app/lib/Center";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Input from "./Input";
import validation from "../validation/person";
import Person from "@/app/model/Person";
import { FormType } from "@/app/model/FormType";

interface Props {
  onSubmit: (data: Person) => void
}

export default function PersonForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  }

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-300 shadow-2xl p-8 w-1/2 rounded-3xl">
        <div className="flex justify-center flex-1">
          <h1 className="text-3xl">Person</h1>
        </div>
        <Input
          name="name"
          register={register}
          errorMessage={errors.name?.message}
          label="Name"
          placeholder="Name"
          type="text"
        />
        <Input
          name="age"
          register={register}
          errorMessage={errors.age?.message}
          label="Age"
          placeholder="Age"
          type="number"
        />
        <div className="flex flex-1 justify-center">
          <button
            className="bg-info rounded-xl text-xl text-white py-4 px-6 hover:bg-blue-900 transition duration-300 shadow-2xl"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </Center>
  );
}
