import "./App.scss";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login, { action as loginAction } from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage, {
  action as signupAction,
} from "./pages/RegisrationPage";
import { tokenLoader } from "./utils/auth";
import BarcodePage from "./pages/BarcodePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    id: "root",
    //errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "auth", element: <Login />, action: loginAction },
      {
        path: "auth/registration",
        element: <RegistrationPage />,
        action: signupAction,
      },
      {
        path: "barcode",
        element: <BarcodePage />,
      },
      {
        path: "logout",
        action: () => {
          localStorage.removeItem("token");
          return redirect("/");
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
