import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

// Route imports
import LandingPage from "./routes/landing/LandingPage";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import SignIn from "./routes/signIn/SignIn";
import UserLayout from "./layouts/UserLayout/UserLayout";
import DashboardHome from "./routes/dashboardHome/DashboardHome";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="createPlatform" element={<LandingPage />} />
      <Route path="joinPlatform" element={<LandingPage />} />
    </Route>,
    <Route path="signIn" element={<SignIn />} />,
    <Route path="user" element={<UserLayout />}>
      <Route index element={<DashboardHome />} />
    </Route>,
  ]),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
