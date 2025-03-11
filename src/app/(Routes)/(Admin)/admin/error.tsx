"use client";
import Link from "next/link";

// Error boundaries must be Client Components

export default function Error() {
  return (
    <div className="grid place-items-center w-full min-h-[85vh] p-5 md:p-0">
      <div className="flex flex-col gap-8 w-full md:w-3/4 items-center">
        <div className="flex flex-col gap-5 text-center">
          <h3 className="font-[700] text-[20px] md:text-[32px] lg:text-[40px] ">
            Something went wrong. Try again later
          </h3>
        </div>
        <Link
          href={"/admin"}
          className="flex justify-center items-center text-center text-white bg-primary w-full md:w-2/4 rounded-md h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] lg:text-[24px]"
        >
          {" "}
          Return to dashboard{" "}
        </Link>
      </div>
    </div>
  );
}
