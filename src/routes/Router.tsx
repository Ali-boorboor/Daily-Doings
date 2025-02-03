import Login from "@t/Login";
import Signup from "@t/Signup";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import ForgotPassword from "@t/ForgotPassword";

const Routes = [
  {
    path: "/",
    element: <AuthPage />,
    children: [
      { path: "", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/dashboard",
    element: <HomePage />,
    // children: [
    //   { path: "", element: <Login /> },
    //   { path: "signup", element: <Signup /> },
    //   { path: "forgot-password", element: <ForgotPassword /> },
    // ],
  },
];

export default Routes;
