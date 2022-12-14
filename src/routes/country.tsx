import { arrowBackOutline } from "ionicons/icons";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Icon from "../components/icon";
import { CountryLoader } from "../types/countries.types";

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

const Country = () => {
  const { country, borderCountries } = useLoaderData() as CountryLoader;
  const navigate = useNavigate();

  return (
    <div className="px-6 text-darkBlueText dark:text-white">
      <div
        className="flex items-center gap-2 py-1.5 px-6 shadow-md mb-20 mt-12 max-w-max bg-white dark:bg-darkBlueElements dark:lg:hover:bg-darkBlueBackground cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <Icon icon={arrowBackOutline} size="small" />
        <button>Back</button>
      </div>
      <article className="lg:flex gap-44">
        <div className="lg:flex-1">
          <img
            src={country.flag}
            alt={country.name}
            width="100%"
            height="100%"
          />
        </div>

        <div className="lg:flex-1">
          <h2 className="font-extrabold text-xl mt-11 lg:mt-0">
            {country.name}
          </h2>
          <div className="mt-6 mb-8 lg:flex lg:justify-between">
            <div className="gap-3 flex flex-col">
              <Stats name="Native Name">{country.nativeName}</Stats>
              <Stats name="Population">{country.population}</Stats>
              <Stats name="Region">{country.region}</Stats>
              <Stats name="Sub Region">{country.subregion}</Stats>
              <Stats name="Capital">{country.capital}</Stats>
            </div>

            <div className="gap-3 flex flex-col">
              <Stats name="Top Level Domain">{country.tld}</Stats>
              <Stats name="Currencies">
                {country.currencies?.map((currency) => (
                  <span key={currency}>{currency}</span>
                ))}
              </Stats>
              <Stats name="Languages">
                {country.languages?.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </Stats>
            </div>
          </div>

          {country.borders && (
            <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:items-center">
              <h3 className="font-semibold text-lg lg:text-base">
                Border Countries:{" "}
              </h3>
              <div className="flex gap-4 flex-wrap">
                {borderCountries.map((borderCountry) => (
                  <Link
                    to={`/countries/${borderCountry.cca2}`}
                    key={borderCountry.cca2}
                    className="bg-white hover:bg-lightGray py-1.5 px-6 shadow-md dark:bg-darkBlueElements dark:lg:hover:bg-darkBlueBackground"
                  >
                    {borderCountry.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Country;
