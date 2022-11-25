import { Link, useLoaderData } from "react-router-dom";
import { CountriesModel } from "../types/countries.types";

interface StatsProps {
  name: string;
  children: React.ReactNode | React.ReactNode[];
}

const Stats = ({ name, children }: StatsProps) => (
  <p className="font-light">
    <span className="font-semibold">{name}: </span>
    {children}
  </p>
);

const Countries = () => {
  const countries = useLoaderData() as CountriesModel[];

  return (
    <>
      {countries.map((country) => (
        <article
          key={country.cca2}
          className="text-darkBlueText bg-white shadow-md rounded-md dark:bg-darkBlueElements dark:text-white"
        >
          <Link to={`/countries/${country.cca2}`}>
            <img src={country.flags.svg} className="rounded-md" />
            <div className="ml-6 mt-9 mb-11">
              <h2 className="font-extrabold mb-4 text-xl">
                {country.name.common}
              </h2>
              <Stats name="Population">{country.population}</Stats>
              <Stats name="Region">{country.region}</Stats>
              <Stats name="Capital">
                {country.capital?.length > 0 ? country.capital[0] : null}
              </Stats>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Countries;
