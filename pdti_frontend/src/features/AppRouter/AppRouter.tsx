import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import "./AppRouter.css";
import { Route, Routes } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const PagesRoutes = {
  homepage: "/",
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PagesRoutes.homepage} element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
