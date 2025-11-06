import { useParams } from "react-router-dom";
import { videos } from "../data/home";
import { PageHeader } from "../layouts/PageHeader";
import { VideoPlayer } from "../components/VideoPlayer";
import { VideoInfo } from "../components/VideoInfo";
import { SuggestedVideos } from "../components/SuggestedVideos";
import { SidebarProvider } from "../contexts/SideBarContext";

const WatchPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="flex-grow overflow-auto">
          <div className="px-8 pb-4 max-w-7xl mx-auto">
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
              {/* Video Player and Video info column */}
              <div className="space-y-6">
                <VideoPlayer video={video} />
                <VideoInfo video={video} />
              </div>

              {/* Suggested Videos column*/}
              <div>
                <SuggestedVideos currentVideoId={video.id} limit={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default WatchPage;
