import axios, { AxiosResponse } from "axios";
import { CountriesModel } from "../../types/countries.types";

const baseURL = "https://restcountries.com/v3.1";

const countriesApi = axios.create({
  baseURL: baseURL,
});

export const getAllCountries = async (): Promise<CountriesModel[]> => {
  try {
    const response: AxiosResponse<CountriesModel[], typeof countriesApi> =
      await countriesApi.get("/all");
    return response.data;
  } catch (error: any) {
    console.error(error);
    return [];
  }
};

export const getCountryByName = async (
  name: string
): Promise<CountriesModel[]> => {
  try {
    const response: AxiosResponse<CountriesModel[], typeof countriesApi> =
      await countriesApi.get(`/name/${name}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return [];
  }
};
