import { Suspense, lazy } from "react";

import LoadingScreen from "../components/LoadingScreen";
import GuestGuard from "../components/GuestGuard";
import AuthGuard from "../components/AuthGuard";
import DashboardLayout from "../pages/main/Main";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Authentication pages
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));

// Dashboard
const Overview = Loadable(lazy(() => import("../pages/main/Main")));

// Error pages
const AuthorizationRequired = Loadable(
  lazy(() => import("../pages/AuthorizationRequired"))
);
const NotFound = Loadable(lazy(() => import("../pages/NotFound")));
const ServerError = Loadable(lazy(() => import("../pages/ServerError")));

const routes = [
  {
    path: "/login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    breadcrumb: null,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      /*
      {
        path: 'overview',
        element: <Overview />,
      }
      */
    ],
  },
  {
    path: "401",
    element: <AuthorizationRequired />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "500",
    element: <ServerError />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
