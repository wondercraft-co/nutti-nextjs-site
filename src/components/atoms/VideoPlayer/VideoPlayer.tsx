"use client";
import dynamic from "next/dynamic";
import { ComponentProps } from "react";
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer = (props: ComponentProps<typeof ReactPlayer>) => {
  return (
    <>
      <ReactPlayer {...props} className="!aspect-[9/16] !w-full" width={400} height={711} />
    </>
  );
};
export default VideoPlayer;

// 540 / 960
// 9 / 16
// 400 / 711