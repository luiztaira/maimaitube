import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";

interface FallbackPageProps {
  title?: string;
  message?: string;
}

const FallbackPage = ({ title, message }: FallbackPageProps) => {
  const location = useLocation();

  // Default values
  let pageTitle = title || "Coming Soon";
  let pageMessage =
    message || "This page is under construction. Please check back later!";

  // dynamic based on route
  if (!title && !message) {
    const routeMessages: { [key: string]: { title: string; message: string } } =
      {
        "/shorts": {
          title: "Shorts",
          message: "Short-form videos feature is coming soon!",
        },
        "/subscriptions": {
          title: "Subscriptions",
          message: "Subscription management will be available soon!",
        },
        "/library": {
          title: "Library",
          message: "Your personal video library is under construction.",
        },
        "/history": {
          title: "Watch History",
          message: "Track your viewing history - coming soon!",
        },
        "/your-videos": {
          title: "My Videos",
          message: "Upload and manage your videos - feature in development.",
        },
        "/music": {
          title: "Music",
          message: "Music videos and tracks will be available here soon.",
        },
        "/playlist": {
          title: "Playlists",
          message: "Playlist feature is under development.",
        },
      };

    const routeInfo = routeMessages[location.pathname];
    if (routeInfo) {
      pageTitle = routeInfo.title;
      pageMessage = routeInfo.message;
    } else if (location.pathname.startsWith("/@")) {
      pageTitle = "Channel";
      pageMessage = "Channel pages are under development.";
    } else if (location.pathname !== "/") {
      pageTitle = "Page Not Found";
      pageMessage = "The page you're looking for doesn't exist.";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">goofy image here</span>
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
              Back to Home
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FallbackPage;
