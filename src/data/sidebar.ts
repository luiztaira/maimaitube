type Subscription = {
  channelName: string;
  id: string | number;
  imgUrl: string;
};

export const subscriptions: Subscription[] = [
  {
    channelName: "Luiz Taira",
    id: 1,
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
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
