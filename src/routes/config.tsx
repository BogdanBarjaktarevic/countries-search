import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { countriesLoader } from "./loaders/countriesLoader";
import { countryLoader } from "./loaders/countryLoader";

const Layout = React.lazy(() => import("../components/layout"));
const Root = React.lazy(() => import("./root"));
const Countries = React.lazy(() => import("../components/countries"));
const Country = React.lazy(() => import("./country"));
const NotFound = React.lazy(() => import("./notFound"));
const CountriesErrorElement = React.lazy(
  () => import("../components/countriesErrorElement")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Layout />
      </React.Suspense>
    ),
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
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </React.Suspense>
    ),
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <Country />, loader: countryLoader }],
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </React.Suspense>
    ),
    children: [{ path: "*", index: true, element: <NotFound /> }],
  },
]);
