import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import FallbackPage from "./pages/FallbackPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="*" element={<FallbackPage />} />
    </Routes>
  );
}
