import {
  CountryModel,
  CountriesModel,
  StructuredCountryModel,
} from "./../types/countries.types";

export const structureCountryData = (
  country: CountryModel
): StructuredCountryModel => {
  const nativeName = Object.values(country.name.nativeName)[0].official;
  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name
  );
  console.log("currencies", currencies);
  const languages = Object.values(country.languages);

  return {
    name: country.name.common,
    capital: country.capital.length > 0 ? country.capital[0] : null,
    population: country.population,
    subregion: country.subregion,
    tld: country.tld && country.tld[0],
    borders: country.borders,
    region: country.region,
    flag: country.flags.svg,
    currencies,
    languages,
    nativeName,
  };
};

export const structureBorderCountriesData = (
  borderCountries: CountriesModel[]
) => {
  return borderCountries.map((borderCountry) => {
    return { name: borderCountry.name.common, cca2: borderCountry.cca2 };
  });
};
