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
    <div className="bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        controls
        autoPlay
        preload="metadata"
      >
        <source src={video.videoUrl} type="video/mp4" />
        browser does not support the video tag.
      </video>
    </div>
  );
};
