import { SVGProps } from "react";

export default function Menu(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
        ></path>
      </svg>
    )
  }
  