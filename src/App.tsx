import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import FallbackPage from "./pages/FallbackPage";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      {/* Catch-all route for everything else */}
      <Route path="*" element={<FallbackPage />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
