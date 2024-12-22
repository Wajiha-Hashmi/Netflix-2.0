import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Khan VideoTitle</h1>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      <div className="flex mt-8">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
          <CiPlay1 size="24px" />
          <span className="ml-1">Play</span>
        </button>
        <button className="flex items-center mx-2 px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md">
          <CiCircleInfo size="24px" />
          <span className="ml-1">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
