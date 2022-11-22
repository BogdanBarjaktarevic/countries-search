import { LoaderFunctionArgs } from "react-router-dom";
import Countries from "../components/countries";
import Header from "../components/header";
import { getAllCountries } from "../service/api/countriesApi";

export const loader = async () => {
  const countries = await getAllCountries();
  return countries;
};

const Root = () => {
  return (
    <>
      <Header />
      <div className="px-5 bg-lightGray">
        <div>dsadasdas</div>
        <main className="px-8 flex flex-col gap-12">
          <Countries />
        </main>
      </div>
    </>
  );
};

export default Root;
