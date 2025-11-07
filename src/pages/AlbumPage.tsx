import { useParams } from "react-router-dom";
import { PageHeader } from "../layouts/PageHeader";
import { SidebarProvider } from "../contexts/SideBarContext";
import { albums, getDriveImageUrl } from "../data/albums";
import { ImageGridItem } from "../components/ImageGridItem";
import FallbackPage from "./FallBackPage";

const AlbumPage = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return (
      <FallbackPage
        title="Album Not Found"
        message="The album you're looking for doesn't exist."
      />
    );
  }

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="flex-grow overflow-auto">
          <div className="px-8 pb-4 max-w-7xl mx-auto">
            {/* Album Header */}
            <div className="mb-8">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={getDriveImageUrl(album.coverImageId, "large")}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
              <p className="text-gray-600">{album.description}</p>
            </div>

            {/* Image Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {album.images.map((image) => (
                <ImageGridItem
                  key={image.id}
                  image={image}
                  albumId={album.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AlbumPage;
