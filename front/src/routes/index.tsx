import { Routes, Route } from "react-router-dom";

import Chat from "../pages/Chat";
import Join from "../pages/Join";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
