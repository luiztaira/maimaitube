import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import FallbackPage from "./pages/FallBackPage";
import AlbumPage from "./pages/AlbumPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/albums" element={<AlbumPage />} />
      {/* Catch-all route for everything else */}
      <Route path="*" element={<FallbackPage />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
