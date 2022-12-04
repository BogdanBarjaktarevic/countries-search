import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-darkBlueText dark:text-white flex flex-col items-center">
      <h1 className="font-extrabold text-8xl">404</h1>
      <h2 className="font-bold text-xl">Page Not Found</h2>
      <p>The page you're looking for does not seem to exist</p>
      <Link
        to="/"
        className="bg-darkBlueElements hover:bg-darkBlueBackground text-white dark:bg-white dark:hover:bg-lightGray dark:text-darkBlueText shadow-lg py-2 px-8 rounded-md mt-8"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
