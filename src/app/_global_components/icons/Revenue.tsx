import { SVGProps } from "react";

export default function Revenue(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <path d="M176 96h64v320h-64z" fill="currentColor"></path>
        <path d="M80 320h64v96H80z" fill="currentColor"></path>
        <path d="M272 256h64v160h-64z" fill="currentColor"></path>
        <path d="M368 192h64v224h-64z" fill="currentColor"></path>
      </svg>
    )
  }
  