import { SVGProps } from "react";

export default function UserCicrleLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="12" cy="10" r="3" strokeLinecap="round"></circle>
        <circle cx="12" cy="12" r="9"></circle>
        <path
          strokeLinecap="round"
          d="M18 18.706c-.354-1.063-1.134-2.003-2.219-2.673S13.367 15 12 15s-2.697.363-3.781 1.033S6.354 17.643 6 18.706"
        ></path>
      </g>
    </svg>
  )
}
