import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  color,
  size = "small",
  isDisabled = false,
}: {
  children: string;
  color: "red" | "green" | "violet" | "gray";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
}) {
  const themes = {
    violet: "bg-violet-700 hover:bg-violet-500",
    green: "bg-green-700 hover:bg-green-500",
    red: "bg-red-700 hover:bg-red-500",
    gray: "bg-gray-700 hover:bg-gray-500",
  };
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        `${themes[color]} rounded-md font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-500 `,
        {
          "px-2 py-1": size === "small",
          "px-3 py-2": size === "medium",
        }
      )}
    >
      {children}
    </button>
  );
}
