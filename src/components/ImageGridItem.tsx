import { Link } from "react-router-dom";
import { getDriveImageUrl } from "../data/albums";

interface ImageGridItemProps {
  image: {
    id: string;
    title: string;
    driveId: string;
  };
  albumId: string;
}

export const ImageGridItem = ({ image, albumId }: ImageGridItemProps) => {
  return (
    <Link to={`/album/${albumId}/image/${image.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={getDriveImageUrl(image.driveId, "medium")}
          alt={image.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium text-gray-900">{image.title}</h3>
    </Link>
  );
};
