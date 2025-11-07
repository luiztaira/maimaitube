import { getRandomImage } from "../utils/getRandomImage";

type Subscription = {
  channelName: string;
  id: string | number;
  imgUrl: string;
};

export const subscriptions: Subscription[] = [
  {
    channelName: "Luiz Taira",
    id: 1,
    imgUrl: getRandomImage(),
  },
];

type Playlist = {
  id: number;
  name: string;
};

export const playlists: Playlist[] = [
  { id: 1, name: "音楽" },
  { id: 2, name: "お気に入り" },
];
