import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="py-6 bg-white sticky top-0 z-50">
      <div className="container flex justify-between mx-auto">
        <span className="text-5xl font-bold tracking-tight text-emerald-900">
          <Link to="/">LAUNCHPAD</Link>
        </span>
        <span className="flex text-xl space-x-2">
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              >
                HOME
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              >
                ABOUT US
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              >
                ENTREPRENEURS
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              >
                INVESTORS
              </Link>

          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"className="flex items-center px-5 py-4 rounded  font-bold text-white bg-emerald-500 hover:bg-emerald-300"
              
            >
              MEMBER LOGIN
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;