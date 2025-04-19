import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Root from "../Pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
    ],
  },
]);
