import SuspenseWrapper from "@/routes/SuspenseWrapper";
import { Navigate } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("@t/Login"));
const Signup = lazy(() => import("@t/Signup"));
const ForgotPassword = lazy(() => import("@t/ForgotPassword"));
const DashboardPage = lazy(() => import("@t/DashboardPage"));
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
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
];

export default Routes;
