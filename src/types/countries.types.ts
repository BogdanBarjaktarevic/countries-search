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
