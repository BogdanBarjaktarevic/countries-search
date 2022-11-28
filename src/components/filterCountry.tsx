import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const filterOptions = [
  { label: "All", filter: "all" },
  { label: "America", filter: "america" },
  { label: "Africa", filter: "africa" },
  { label: "Asia", filter: "asia" },
  { label: "Europe", filter: "europe" },
  { label: "Oceania", filter: "oceania" },
];

const FilterCountry = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setShowDropdown(false));
  const filterParam = searchParams.get("filter");

  const handleFilterParam = (filter: string) => {
    setShowDropdown(false);
    if (filter === "all") {
      return setSearchParams({});
    }

    setSearchParams({ filter });
  };

  return (
    <>
      <div
        className="bg-white py-3.5 px-10 pr-4 shadow-md rounded-md flex items-center dark:bg-darkBlueElements dark:text-white md:cursor-pointer dark:md:hover:bg-darkBlueBackground"
        onClick={() => setShowDropdown(showDropdown)}
      >
        <span className="capitalize">
          {filterParam ? filterParam : "Filter by Region"}
        </span>
        <IonIcon icon={chevronDown} size="small" className="ml-6" />
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="bg-white shadow-md rounded-md absolute w-full mt-2  dark:bg-darkBlueElements dark:text-white"
        >
          {filterOptions.map((option) => (
            <p
              key={option.filter}
              className="px-5 py-2 md:cursor-pointer dark:md:hover:bg-darkBlueBackground"
              onClick={() => handleFilterParam(option.filter)}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterCountry;
