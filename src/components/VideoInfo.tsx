import { ThumbsUpIcon, ThumbsDownIcon, ShareIcon } from "lucide-react";

type VideoInfoProps = {
  video: {
    id: string;
    title: string;
    channel: {
      name: string;
      profileUrl: string;
    };
    views: number;
    postedAt: Date;
    duration: number;
    description: string;
  };
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export const VideoInfo = ({ video }: VideoInfoProps) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

      {/* Channel info and (fake)actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Channel info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <img
            src={video.channel.profileUrl}
            alt={video.channel.name}
            className="w-12 h-12 rounded-full flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-lg truncate">
              {video.channel.name}
            </p>
            <p className="text-gray-600 text-sm">
              {VIEW_FORMATTER.format(video.views)} subscribers
            </p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors whitespace-nowrap flex-shrink-0">
            Subscribe
          </button>
        </div>

        {/* Action buttons. They dont do anything */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ThumbsUpIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ThumbsDownIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ShareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video stats and description */}
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-2 text-sm text-gray-600 mb-2 flex-wrap">
          <span>{VIEW_FORMATTER.format(video.views)} views</span>
          <span>•</span>
          <span>{video.postedAt.toLocaleDateString()}</span>
        </div>
        <p className="text-gray-800 whitespace-pre-line">{video.description}</p>
      </div>
    </div>
  );
};
