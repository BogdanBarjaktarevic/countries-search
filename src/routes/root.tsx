import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Countries from "../components/countries";
import FilterCountry from "../components/filterCountry";
import SearchCountry from "../components/searchCountry";
import { getCountries } from "../service/api/countriesApi";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const countryQuery = url.searchParams.get("country") || "";
  const filterQuery = url.searchParams.get("filter") || "";

  const countries = await getCountries(countryQuery, filterQuery);

  return countries;
};

const Root = () => {
  return (
    <>
      <div className="px-5 flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="lg:max-w-md lg:flex-1">
          <SearchCountry />
        </div>
        <div className="max-w-max relative">
          <FilterCountry />
        </div>
      </div>
      <div>
        <main className="px-8 flex flex-col gap-12 mt-6 lg:px-5 lg:grid lg:grid-cols-4">
          <Countries />
        </main>
      </div>
    </>
  );
};

export default Root;
