import { LoaderFunctionArgs } from "react-router-dom";
import Countries from "../components/countries";
import Header from "../components/header";
import SearchCountry from "../components/searchCountry";
import { getAllCountries, getCountryByName } from "../service/api/countriesApi";
import { CountriesModel } from "../types/countries.types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let countries: CountriesModel[];
  const url = new URL(request.url);
  const countryQuery = url.searchParams.get("country") || "";

  if (countryQuery) {
    countries = await getCountryByName(countryQuery);
  } else {
    countries = await getAllCountries();
  }

  return countries;
};

const Root = () => {
  return (
    <div className="bg-lightGray dark:bg-darkBlueBackground">
      <Header />
      <div className="px-5">
        <SearchCountry />
      </div>
      <div>
        <main className="px-8 flex flex-col gap-12 mt-6">
          <Countries />
        </main>
      </div>
    </div>
  );
};

export default Root;
