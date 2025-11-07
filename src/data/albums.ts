export interface AlbumImage {
  id: string;
  title: string;
  description?: string;
  driveId: string; // google drive file id
  uploadedAt: Date;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  images: AlbumImage[];
  coverImageId: string;
}

export const albums: Album[] = [
  {
    id: "giberish123",
    title: "Maimai",
    description: "test",
    coverImageId: "test",
    images: [
      {
        id: "1",
        title: "test",
        description: "test",
        driveId: "test",
        uploadedAt: new Date("2024-01-15"),
      },
      {
        id: "2",
        title: "test2",
        description: "test2",
        driveId: "test2",
        uploadedAt: new Date("2024-01-16"),
      },
    ],
  },
  // could add more albums here
];

// Helper function to get Google Drive image URL
export const getDriveImageUrl = (
  driveId: string,
  size: "thumb" | "medium" | "large" = "medium"
) => {
  const sizes = {
    thumb: "=w200-h200",
    medium: "=w400-h300",
    large: "=w800-h600",
  };

  return `https://drive.google.com/uc?id=${driveId}${sizes[size]}`;
};
