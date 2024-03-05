import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  color,
  size = "small",
  isDisabled = false,
}: {
  children: string;
  color: string;
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
}) {
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        `bg-${color}-700 hover:bg-${color}-500 rounded-md font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-500 `,
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
