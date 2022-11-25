import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countryQuery = searchParams.get("country") || "";

  useEffect(() => {
    (document.getElementById("search-country") as HTMLInputElement).value =
      countryQuery;
  }, [countryQuery]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const isFirstSearch = countryQuery == null;

    setSearchParams(
      { country: event.target.value },
      { replace: !isFirstSearch }
    );
  };

  return (
    <div>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IonIcon
              icon={searchOutline}
              size="small"
              className="text-darkGray dark:text-white"
            />
          </div>
          <input
            type="search"
            id="search-country"
            className="block w-full p-4 pl-10 text-sm text-gray-900 shadow-lg rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-darkBlueElements dark:placeholder-white"
            placeholder="Search for a country..."
            required
            onChange={handleOnChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchCountry;
