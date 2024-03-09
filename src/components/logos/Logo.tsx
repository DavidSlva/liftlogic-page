import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <span>
      <svg
        width="680.75635"
        height="452.78152"
        viewBox="0 0 13.808446 9.18421"
        version="1.1"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        id="svg1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs1">
          {/* Ten en cuenta que el manejo de perfiles de color como este podría no ser efectivo en la web */}
        </defs>
        <g
          id="g1"
          transform="matrix(0.62409614,0,0,0.61228154,1.8284894,-0.30614748)"
          style={{ stroke: "#ffffff", strokeOpacity: 1 }}
        >
          <polygon
            points="1.75,11.25 1.75,4.75 8,1.25 14.25,4.75 14.25,11.25 8,14.75 "
            id="polygon1"
            style={{ stroke: "#ffffff", strokeOpacity: 1 }}
          />
          <path
            d="M 8,14 V 8 M 13.75,5 8,8 M 2,5 8,8"
            id="path1"
            style={{ stroke: "#ffffff", strokeOpacity: 1 }}
          />
        </g>
        <circle cx="1.75" cy="4.75" r="0.15" />
        <circle cx="14.25" cy="4.75" r="0.15" />
        <circle cx="1.75" cy="11.25" r="0.15" />
        <circle cx="14.25" cy="11.25" r="0.15" />
        <ellipse
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.03,
          }}
          id="path2"
          cx="0.76190478"
          cy="5.0352621"
          rx="0.76190478"
          ry="0.74131274"
        />
        <ellipse
          style={{ fill: "#ffffff", stroke: "none", strokeWidth: 0.03 }}
          id="path2-2"
          cx="13.046541"
          cy="5.0352573"
          rx="0.76190478"
          ry="0.74131274"
        />
      </svg>
    </span>
  );
};

export default Logo;
