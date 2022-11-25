import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { getCountry } from "../service/api/countriesApi";
import { StructuredCountryModel } from "../types/countries.types";
import { structureCountryData } from "../utils/structureCountryData";

interface StatsProps {
  name: string;
  children: React.ReactNode | React.ReactNode[];
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const data = await getCountry(params.countryId);
  const country = structureCountryData(data);
  return country;
};

const Stats = ({ name, children }: StatsProps) => (
  <p className="font-light">
    <span className="font-semibold">{name}: </span>
    {children}
  </p>
);

const Country = () => {
  const country = useLoaderData() as StructuredCountryModel;
  const navigate = useNavigate();

  return (
    <div className="px-6 text-darkBlueText dark:text-white">
      <div className="flex items-center gap-2 py-1.5 px-6 shadow-md mb-20 mt-12 max-w-max dark:bg-darkBlueElements">
        <IonIcon icon={arrowBackOutline} size="small" />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <article>
        <img src={country.flag} alt="country flag" />
        <h2 className="font-extrabold text-xl mt-11">{country.name}</h2>
        <div className="gap-3 flex flex-col mt-6 mb-8">
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
          {country.borders && (
            <div className="flex flex-col gap-4 mt-8">
              <h3 className="font-semibold text-lg">Border Countries: </h3>
              <div className="flex gap-6 flex-wrap">
                {country.borders.map((border) => (
                  <Link
                    to={`/countries/${border}`}
                    key={border}
                    className="py-1.5 px-6 shadow-md dark:bg-darkBlueElements"
                  >
                    {border}
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
