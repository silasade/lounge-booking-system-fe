"use client";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#D4A373"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
