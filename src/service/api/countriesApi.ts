import axios, { AxiosResponse } from "axios";
import { CountriesModel, CountryModel } from "../../types/countries.types";

const baseURL = "https://restcountries.com/v3.1";

const countriesApi = axios.create({
  baseURL: baseURL,
});

export const getCountries = async (
  name?: string,
  filter?: string
): Promise<CountriesModel[]> => {
  let url: string;

  if (name) {
    url = `/name/${name}`;
  } else if (filter) {
    url = `/region/${filter}`;
  } else {
    url = "/all";
  }
  try {
    const response: AxiosResponse<CountriesModel[], typeof countriesApi> =
      await countriesApi.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error();
  }
};

export const getCountry = async (
  id: string | undefined
): Promise<CountryModel> => {
  try {
    const response: AxiosResponse<CountryModel[], typeof countriesApi> =
      await countriesApi.get(`/alpha/${id}`);
    return response.data[0];
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const getBorderCountries = async (
  ids: string[]
): Promise<CountriesModel[]> => {
  const borderCountiresIds = ids.join(",");

  try {
    const response: AxiosResponse<CountriesModel[], typeof countriesApi> =
      await countriesApi.get(`/alpha?codes=${borderCountiresIds}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
