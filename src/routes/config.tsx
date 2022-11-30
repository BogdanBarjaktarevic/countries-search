import { createBrowserRouter } from "react-router-dom";
import Root, { loader as countriesLoader } from "./root";
import Country, { loader as countryLoader } from "./country";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <Root />, loader: countriesLoader }],
  },
  {
    path: "/countries/:countryId",
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <Country />, loader: countryLoader }],
  },
]);
