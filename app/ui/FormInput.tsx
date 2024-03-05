import React from "react";

interface Props {
  inputType?: string;
  forValue: string;
  title: string;
  placeholder: string;
  isRequired?: boolean;
}

export default function formInput({
  forValue,
  title,
  placeholder,
  inputType = "text",
  isRequired = false,
}: Props) {
  return (
    <div>
      <label htmlFor={forValue} className="block mb-2 text-sm font-medium">
        {title}
      </label>
      <input
        type={inputType}
        id={forValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}
