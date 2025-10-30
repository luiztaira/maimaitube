import { useParams } from "react-router-dom";
import { videos } from "../data/home";
import { PageHeader } from "../layouts/PageHeader";
import { VideoPlayer } from "../components/VideoPlayer";
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr, 400px] gap-6 p-4">
          <VideoPlayer video={video} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default WatchPage;
