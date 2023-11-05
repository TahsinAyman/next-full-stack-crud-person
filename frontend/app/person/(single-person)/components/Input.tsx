import React from "react";

interface Props {
  register: any;
  type: string;
  placeholder: string;
  name: string;
  label: string;
  errorMessage: any;
}

export default function Input(props: Props) {
  return (
    <div className="my-10">
      <label className="ml-2 text-lg">{props.label}</label>
      {props.type === "textarea" ? (
        <textarea
          placeholder={props.placeholder}
          {...props.register(props.name)}
          className="my-3 w-full border rounded-2xl p-4 border-gray-400"
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          {...props.register(props.name)}
          className="my-3 w-full border rounded-2xl p-4 border-gray-400"
        />
      )}
      {props.errorMessage && (
        <p className="text-error ml-2 text-lg">{props.errorMessage}</p>
      )}
    </div>
  );
}
