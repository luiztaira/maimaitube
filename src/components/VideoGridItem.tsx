import { useEffect, useRef, useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch/${id}`} className="relative block">
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-200 ${
              isVideoPlaying ? "scale-110 rounded-none" : "rounded-xl"
            }`}
            alt={title}
          />

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
            {formatDuration(duration)}
          </div>

          {/* Video overlay */}
          <video
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
              isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
            }`}
            ref={videoRef}
            muted
            playsInline
            src={videoUrl}
          />
        </div>
      </a>

      {/* Video info */}
      <div className="flex gap-3">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-200"
            src={channel.profileUrl}
            alt={channel.name}
          />
        </a>
        <div className="flex flex-col min-w-0 flex-1 gap-0.5">
          <a
            href={`/watch/${id}`}
            className="font-semibold text-sm line-clamp-2 leading-tight hover:text-black/80"
            title={title}
          >
            {title}
          </a>
          <a
            href={`/@${channel.id}`}
            className="text-gray-600 text-sm hover:text-black truncate"
          >
            {channel.name}
          </a>
          <div className="text-gray-600 text-sm">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}
