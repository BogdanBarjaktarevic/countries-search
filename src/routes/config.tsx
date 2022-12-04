import { createBrowserRouter } from "react-router-dom";
import Root, { loader as countriesLoader } from "./root";
import Country, { loader as countryLoader } from "./country";
import Layout from "../components/layout";
import Countries from "../components/countries";
import CountriesErrorElement from "../components/countriesErrorElement";
import NotFound from "./notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: "/",
        element: <Root />,
        errorElement: <div>fasfgas</div>,
        children: [
          {
            path: "/",
            element: <Countries />,
            loader: countriesLoader,
            errorElement: <CountriesErrorElement />,
          },
        ],
      },
    ],
  },
  {
    path: "/countries/:countryId",
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <Country />, loader: countryLoader }],
  },
  {
    path: "*",
    element: <Layout />,
    children: [{ path: "*", index: true, element: <NotFound /> }],
  },
]);
