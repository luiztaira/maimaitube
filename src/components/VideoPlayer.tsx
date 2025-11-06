import { useRef } from "react";

type VideoPlayerProps = {
  video: {
    id: string;
    title: string;
    videoUrl: string;
  };
};

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="bg-black rounded-lg overflow-hidden flex justify-center">
      <div className="w-full min-w-[320px] max-w-[1200px] min-h-[180px] max-h-[675px]">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          controls
          autoPlay
          preload="metadata"
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
