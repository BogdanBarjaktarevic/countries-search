import { IonIcon } from "@ionic/react";
import { moonOutline, moon } from "ionicons/icons";
import useSetTheme from "../hooks/useSetTheme";

const Header = () => {
  const { handleSetTheme, theme } = useSetTheme();

  return (
    <header className="flex justify-between items-center px-4 py-10 text-darkBlueText shadow-md mb-6 dark:text-white dark:bg-darkBlueElements">
      <h1 className="font-extrabold">Where in the world?</h1>
      <div className="flex items-center">
        <IonIcon
          icon={theme === "dark" ? moon : moonOutline}
          onClick={handleSetTheme}
          size="small"
        />
        <p className="ml-4 font-semibold">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
