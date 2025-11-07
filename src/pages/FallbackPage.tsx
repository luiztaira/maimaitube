import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { getRandomImage } from "../utils/getRandomImage";

interface FallbackPageProps {
  title?: string;
  message?: string;
}

const FallbackPage = ({ title, message }: FallbackPageProps) => {
  const location = useLocation();

  // Default values
  let pageTitle = title || "Coming Soon";
  let pageMessage =
    message || "このページなにもないよ！（ホームページと動画のページだけ！";

  // dynamic based on route
  if (!title && !message) {
    const routeMessages: { [key: string]: { title: string; message: string } } =
      {
        "/shorts": {
          title: "Shorts",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/subscriptions": {
          title: "Subscriptions",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/library": {
          title: "Library",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/history": {
          title: "Watch History",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/your-videos": {
          title: "My Videos",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/music": {
          title: "Music",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
        "/playlist": {
          title: "Playlists",
          message:
            "このページなにもないよ！（ホームページと動画のページだけ！）",
        },
      };

    const routeInfo = routeMessages[location.pathname];
    if (routeInfo) {
      pageTitle = routeInfo.title;
      pageMessage = routeInfo.message;
    } else if (location.pathname.startsWith("/@")) {
      pageTitle = "Channel";
      pageMessage =
        "このページなにもないよ！（ホームページと動画のページだけ！）.";
    } else if (location.pathname !== "/") {
      pageTitle = "Page Not Found";
      pageMessage =
        "このページなにもないよ！（ホームページと動画のページだけ！）";
    }
  }

  const randomImage = getRandomImage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-300">
            <img
              src={randomImage}
              alt="Goofy random image"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{pageTitle}</h1>
          <p className="text-gray-600 mb-6">{pageMessage}</p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button
              variant="default"
              className="w-full flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              ホーム画面へ戻る
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            前の画面へ戻る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FallbackPage;
