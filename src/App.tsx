import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/PortfolioPage";
import GuestbookPage from "./pages/GuestbookPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guestbook" element={<GuestbookPage />} />
    </Routes>
  );
}

export default App;
