import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "../App";
import Dashboard from "../views/Dashboard";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
