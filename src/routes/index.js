import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import EmptyLayout from "../layout/EmptyLayout";
import MainLayout from "../layout/MainLayout";
import Account from "../pages/Account";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Snippet from "../pages/Snippet";

const routes = (isLoggedIn = false) => [
  {
    path: "/app/dashboard",
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "snippet/:id", element: <Snippet /> },
      { path: "account", element: <Account /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/login",
    element: !isLoggedIn ? <EmptyLayout /> : <Navigate to="/app/dashboard" />,
    children: [{ path: "", element: <Login /> }],
  },
];

export default routes;
