import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import ToastList from "../Toast/ToastList";

function Layout() {
  const location = useLocation();

  return (
    <div
      className={`w-full flex flex-col min-h-screen pb-4 px-2 items-center relative ${
        location.pathname == "/" ? "bg-[#f5f6f9]" : "bg-gray-50"
      }`}
    >
      <Header />
      <div className="flex-1 w-full flex">
        <Outlet />
      </div>
      <ToastList />
    </div>
  );
}

export default Layout;
