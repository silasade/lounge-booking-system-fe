"use client";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-[vw] h-[100vh] flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="150"
        width="150"
        color="#D4A373"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
