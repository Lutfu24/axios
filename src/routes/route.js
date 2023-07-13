import Home from "../Pages/Site/Home/Home";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import SiteRoot from "../Pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../Pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];
