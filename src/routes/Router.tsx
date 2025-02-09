import SuspenseWrapper from "@/routes/SuspenseWrapper";
import { Navigate } from "react-router";
import { lazy } from "react";

const ForgotPassword = lazy(() => import("@t/ForgotPassword"));
const StickyWalls = lazy(() => import("@t/StickyWalls"));
const Dashboard = lazy(() => import("@t/Dashboard"));
const Calendar = lazy(() => import("@t/Calendar"));
const Signup = lazy(() => import("@t/Signup"));
const Login = lazy(() => import("@t/Login"));
const AuthPage = lazy(() => import("@/pages/AuthPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));

const Routes = [
  {
    path: "/auth",
    element: (
      <SuspenseWrapper>
        <AuthPage />
      </SuspenseWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "calendar", element: <Calendar /> },
      { path: "sticky-wall", element: <StickyWalls /> },
    ],
  },
];

export default Routes;
