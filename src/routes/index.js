import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

// components
import LoadingScreen from "../components/loading_screen";
import AppLayout from "../layouts/app";
import LogoOnlyLayout from "../layouts/logo_only_layout";
import { PATH_WEATHER_APP } from "../config";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/app")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main PAge Routes
    {
      path: "yocket",
      element: <AppLayout />,
      children: [
        { element: <Navigate to={PATH_WEATHER_APP} replace />, index: true },
        { path: "dashboard", element: <DashBoard /> },
        { path: "game", element: <Game /> },
        { path: "details", element: <Details /> },
      ],
    },
    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to={PATH_WEATHER_APP} replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// GENERAL
const DashBoard = Loadable(lazy(() => import("../pages/app/weather_search")));
const Game = Loadable(lazy(() => import("../pages/app/main_map")));
const Details = Loadable(lazy(() => import("../pages/app/city_details")));

// NOT FOUND
const Page500 = Loadable(lazy(() => import("../pages/page_500")));
const NotFound = Loadable(lazy(() => import("../pages/page_404")));
