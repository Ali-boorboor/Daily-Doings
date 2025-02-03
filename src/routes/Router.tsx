import Login from "@t/Login";
import Signup from "@t/Signup";
import ForgotPassword from "@t/ForgotPassword";
import AuthPage from "@/pages/AuthPage";

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
];

export default Routes;
