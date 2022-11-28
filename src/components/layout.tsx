import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="bg-lightGray dark:bg-darkBlueBackground pb-8 min-h-screen">
      <Header />
      <div className="lg:container lg:m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
