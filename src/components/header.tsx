import { IonIcon } from "@ionic/react";
import { moonOutline, moon } from "ionicons/icons";
import { Link } from "react-router-dom";
import useSetTheme from "../hooks/useSetTheme";

const Header = () => {
  const { handleSetTheme, theme } = useSetTheme();

  return (
    <header className="flex justify-between items-center px-4 py-10 text-darkBlueText shadow-md mb-6 dark:text-white dark:bg-darkBlueElements lg:py-5 bg-white dark:to-darkBlueElements">
      <Link to="/" className="font-extrabold">
        Where in the world?
      </Link>
      <div className="flex items-center">
        <IonIcon
          icon={theme === "dark" ? moon : moonOutline}
          onClick={handleSetTheme}
          size="small"
          className="cursor-pointer"
        />
        <p className="ml-4 font-semibold">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
