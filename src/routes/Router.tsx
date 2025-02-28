import SuspenseWrapper from "@/routes/SuspenseWrapper";
import { Navigate } from "react-router";
import { lazy } from "react";

const ChangePasswordForm = lazy(() => import("@o/SettingsOrganisms/ChangePasswordForm"));
const ChangeUsernameForm = lazy(() => import("@o/SettingsOrganisms/ChangeUsernameForm"));
const ChangeCoverForm = lazy(() => import("@o/SettingsOrganisms/ChangeCoverForm"));
const FolderTodosTable = lazy(() => import("@o/FoldersOrganisms/FolderTodosTable"));
const ForgotPassword = lazy(() => import("@t/ForgotPassword"));
const StickyWall = lazy(() => import("@t/StickyWall"));
const Dashboard = lazy(() => import("@t/Dashboard"));
const Calendar = lazy(() => import("@t/Calendar"));
const Settings = lazy(() => import("@t/Settings"));
const Signup = lazy(() => import("@t/Signup"));
const Folder = lazy(() => import("@t/Folder"));
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
      { path: "sticky-wall", element: <StickyWall /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "calendar", element: <Calendar /> },
      { path: "table", element: <Table /> },
      { path: "today", element: <Today /> },
      { path: "form", element: <Form /> },
      {
        path: "folder",
        children: [
          { path: "", element: <Folder /> },
          { path: ":folderID", element: <FolderTodosTable /> },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            element: <Settings />,
          },
          {
            path: "change-password",
            element: <ChangePasswordForm />,
          },
          {
            path: "change-username",
            element: <ChangeUsernameForm />,
          },
          {
            path: "change-cover",
            element: <ChangeCoverForm />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default Routes;
