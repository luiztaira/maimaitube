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
  };
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export const VideoInfo = ({ video }: VideoInfoProps) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={video.channel.profileUrl}
            alt={video.channel.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-lg">{video.channel.name}</p>
            <p className="text-gray-600 text-sm">
              {VIEW_FORMATTER.format(video.views)} subscribers
            </p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
            Subscribe
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ThumbsUpIcon />
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ThumbsDownIcon />
          </button>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ShareIcon />
          </button>
        </div>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-2 text-sm text-gray-600 mb-2">
          <span>{VIEW_FORMATTER.format(video.views)} views</span>
          <span>•</span>
          <span>{video.postedAt.toLocaleDateString()}</span>
        </div>
        <p className="text-gray-800">
          This is a sample video description. In a real app, you would have a
          full description from your video data.
        </p>
      </div>
    </div>
  );
};
