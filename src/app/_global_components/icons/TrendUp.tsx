import { SVGProps } from "react";

export default function TrendUp(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m3 17l6-6l4 4l8-8"></path>
          <path d="M17 7h4v4"></path>
        </g>
      </svg>
    )
  }
  