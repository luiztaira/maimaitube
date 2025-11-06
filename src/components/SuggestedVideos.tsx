import { videos } from "../data/home";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type SuggestedVideosProps = {
  currentVideoId: string;
  limit?: number;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export const SuggestedVideos = ({
  currentVideoId,
  limit = 5,
}: SuggestedVideosProps) => {
  const suggestedVideos = videos
    .filter((video) => video.id !== currentVideoId)
    .slice(0, limit);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg mb-4">Suggested Videos</h3>

      {suggestedVideos.map((video) => (
        <a
          key={video.id}
          href={`/watch/${video.id}`}
          className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
          <div className="relative flex-shrink-0">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-40 h-24 object-cover rounded-lg"
            />
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
              {formatDuration(video.duration)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm line-clamp-2 mb-1">
              {video.title}
            </h4>
            <p className="text-gray-600 text-xs mb-1">{video.channel.name}</p>
            <div className="text-gray-500 text-xs">
              {VIEW_FORMATTER.format(video.views)} views •
              {formatTimeAgo(video.postedAt)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
