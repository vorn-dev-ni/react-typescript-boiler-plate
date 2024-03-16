import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFound from "../pages/notFound";
import Layout from "../pages/Layout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // define your routes here
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  // define your routes here
]);
export default routes;
