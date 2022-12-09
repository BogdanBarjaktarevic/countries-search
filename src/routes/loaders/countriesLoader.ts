import { LoaderFunctionArgs } from "react-router-dom";
import { getCountries } from "../../service/api/countriesApi";

export const countriesLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const countryQuery = url.searchParams.get("country") || "";
  const filterQuery = url.searchParams.get("filter") || "";

  const countries = await getCountries(countryQuery, filterQuery);

  return countries;
};
