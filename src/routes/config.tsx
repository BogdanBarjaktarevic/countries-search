import { createBrowserRouter } from "react-router-dom";
import Root, { loader as countriesLoader } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: countriesLoader,
    errorElement: <div>Something went wrong</div>,
  },
]);
