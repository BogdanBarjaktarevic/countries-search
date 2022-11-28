export interface CountriesModel {
  cca2: string;
  flags: {
    svg: string;
  };
  population: number;
  name: {
    common: string;
  };
  region: string;
  capital: string[];
}

export interface CountryModel {
  flags: {
    svg: string;
  };
  population: number;
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

export interface StructuredCountryModel {
  name: string;
  capital: string | null;
  population: number;
  subregion: string;
  tld: string;
  borders: string[];
  region: string;
  flag: string;
  currencies: string[];
  languages: string[];
  nativeName: string;
}

export interface StructuredBorderCountriesModel {
  name: string;
  cca2: string;
}

export interface CountryLoader {
  country: StructuredCountryModel;
  borderCountries: StructuredBorderCountriesModel[];
}
