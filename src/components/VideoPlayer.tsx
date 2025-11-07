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

  // Function to extract YouTube ID from different URL formats
  const getYouTubeId = (url: string): string | null => {
    // regex mendokuse
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?#/]+)/,
      /youtube\.com\/embed\/([^&?#/]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Check if the URL is a YouTube URL
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const youTubeId = getYouTubeId(video.videoUrl);

  return (
    <div className="bg-black rounded-lg overflow-hidden flex justify-center">
      <div className="w-full min-w-[320px] max-w-[1200px] min-h-[180px] max-h-[675px]">
        {isYouTubeUrl(video.videoUrl) && youTubeId ? (
          // YouTube iframe player
          <iframe
            className="w-full h-full min-h-[400px]"
            src={`https://www.youtube.com/embed/${youTubeId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // Native video player for non-YouTube URLs
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
        )}
      </div>
    </div>
  );
};
