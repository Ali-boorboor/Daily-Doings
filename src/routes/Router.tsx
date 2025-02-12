import SuspenseWrapper from "@/routes/SuspenseWrapper";
import { Navigate } from "react-router";
import { lazy } from "react";

const ForgotPassword = lazy(() => import("@t/ForgotPassword"));
const StickyWall = lazy(() => import("@t/StickyWall"));
const Dashboard = lazy(() => import("@t/Dashboard"));
const Calendar = lazy(() => import("@t/Calendar"));
const Signup = lazy(() => import("@t/Signup"));
const Table = lazy(() => import("@t/Table"));
const Today = lazy(() => import("@t/Today"));
const Form = lazy(() => import("@t/Form"));
const Login = lazy(() => import("@t/Login"));
const Page404 = lazy(() => import("@/pages/Page404"));
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
      { path: "sticky-wall", element: <StickyWall /> },
      { path: "table", element: <Table /> },
      { path: "today", element: <Today /> },
      { path: "form", element: <Form /> },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default Routes;
