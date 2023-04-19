import React from "react";

export default function FacebookLogo({ color }: { color?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      id="facebook"
    >
      <path
        d="M20.8 16V13.6C20.8 12.56 21.04 12 22.72 12H24.8V8H21.6C17.6 8 16 10.64 16 13.6V16H12.8V20H16V32H20.8V20H24.32L24.8 16H20.8Z"
        fill="#662AF1"
        fillOpacity="1"
      />
    </svg>
  );
}
