import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home";
import About from "./pages/About";
import SearchPage, { loader as searchLoader } from "./pages/SearchPage";
import Details, { loader as detailsLoader } from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/search/:query", loader: searchLoader, element: <SearchPage /> },
      { path: "/details/:code", loader: detailsLoader, element: <Details /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
