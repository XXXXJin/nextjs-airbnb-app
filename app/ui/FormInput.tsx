import React from "react";

interface Props {
  inputType?: string;
  forValue?: string;
  title?: string;
  placeholder: string;
  isRequired?: boolean;
  name: string;
}

export default function FormInput({
  forValue = "",
  title = "",
  placeholder,
  inputType = "text",
  isRequired = false,
  name,
}: Props) {
  return (
    <div>
      {title !== "" && (
        <label htmlFor={forValue} className="block mb-2 text-sm font-medium">
          {title}
        </label>
      )}
      <input
        type={inputType}
        id={forValue}
        className="outline-none border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  "
        placeholder={placeholder}
        required={isRequired}
        name={name}
      />
    </div>
  );
}
