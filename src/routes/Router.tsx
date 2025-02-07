import SuspenseWrapper from "@/routes/SuspenseWrapper";
import { lazy } from "react";

const Login = lazy(() => import("@t/Login"));
const Signup = lazy(() => import("@t/Signup"));
const ForgotPassword = lazy(() => import("@t/ForgotPassword"));
const AuthPage = lazy(() => import("@/pages/AuthPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));

const Routes = [
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <AuthPage />
      </SuspenseWrapper>
    ),
    children: [
      { path: "", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/doings",
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    ),
    // children: [
    //   { path: "", element: <Login /> },
    //   { path: "signup", element: <Signup /> },
    //   { path: "forgot-password", element: <ForgotPassword /> },
    // ],
  },
];

export default Routes;
