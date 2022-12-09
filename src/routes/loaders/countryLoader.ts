import { LoaderFunctionArgs } from "react-router-dom";
import { getCountry, getBorderCountries } from "../../service/api/countriesApi";
import { StructuredBorderCountriesModel } from "../../types/countries.types";
import {
  structureCountryData,
  structureBorderCountriesData,
} from "../../utils/structureCountryData";

export const countryLoader = async ({ params }: LoaderFunctionArgs) => {
  let borderCountries: StructuredBorderCountriesModel[] = [];
  const data = await getCountry(params.countryId);
  const country = structureCountryData(data);
  if (country.borders) {
    const borderCountriesData = await getBorderCountries(country.borders);
    borderCountries = structureBorderCountriesData(borderCountriesData);
  }
  return { country, borderCountries };
};
