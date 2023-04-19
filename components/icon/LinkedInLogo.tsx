import React from "react";

export default function LinkedInLogo({ color }: { color?: string }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_35_419)">
        <path
          d="M6.45937 21.875H1.92422V7.27031H6.45937V21.875ZM4.18906 5.27812C2.73906 5.27812 1.5625 4.07656 1.5625 2.62656C1.5625 1.92995 1.83923 1.26188 2.3318 0.769302C2.82438 0.276726 3.49245 0 4.18906 0C4.88567 0 5.55375 0.276726 6.04632 0.769302C6.5389 1.26188 6.81562 1.92995 6.81562 2.62656C6.81562 4.07656 5.63906 5.27812 4.18906 5.27812ZM23.4328 21.875H18.9078V14.7656C18.9078 13.0711 18.8734 10.8984 16.55 10.8984C14.1922 10.8984 13.8305 12.7391 13.8305 14.6437V21.875H9.3V7.27031H13.6492V9.2625H13.7125C14.318 8.11484 15.7969 6.90391 18.0031 6.90391C22.593 6.90391 23.4367 9.92656 23.4367 13.8523V21.875H23.4328Z"
          fill="#662AF1"
          fillOpacity="1"
          id="linkedin"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_419">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
