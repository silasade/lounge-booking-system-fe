import { SVGProps } from "react";

export default function Cycle(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M13 20c6-1 8-6 8-10m-7 6l-2 4l4 3M0 9l4-3l3 4m2 10c-6-3-7-8-5-14m16 1C16 1 10 1 6 4.006M20 2v5h-5"
        ></path>
      </svg>
    )
  }
  