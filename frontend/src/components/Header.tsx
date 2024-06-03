import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="py-6 bg-white sticky top-0 z-50">
      <div className="container flex justify-between mx-auto">
        <span className="text-5xl font-bold tracking-tight text-emerald-900">
          <Link to="/"><span>LAUNCHPAD</span><br/>
          <span className="flex items-center justify-center text-zinc-400 text-lg">AFRICAN STARTUP NETWORK</span>
          </Link>
        </span>
        <span className="flex text-xl space-x-2">
          {/* <span className="flex text-xl space-x-2 mx-20">
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/my-bookings"
              >
                HOME
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/about-us"
              >
                ABOUT US
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/companies"
              >
                ENTREPRENEURS
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/investors"
              >
                INVESTORS
              </Link>
            </span> */}

          {isLoggedIn ? (
            <>

            <span className="flex text-xl justify-center space-x-2 mx-20"> 
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/my-bookings"
              >
                HOME
              </Link> 

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/about-us"
              >
                ABOUT US
              </Link> 

              {/* <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/companies"
              >
                ENTREPRENEURS
              </Link> */}

              {/* <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/investors"
              >
                INVESTORS
              </Link> */}
            {/* </span> */}
              {/* <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-bookings"
              > */}
               <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-investors"
              >
                My Investors
              </Link>
              {/* <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-hotels"
              > */}
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 hover:text-emerald-500"
                to="/my-companies"
              >
                My Companies
              </Link>
              </span>
              <SignOutButton />
              {/* </span> */}
            </>
          ) : (

            <>
            <span className="flex text-xl space-x-2 mx-20">
              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/my-bookings"
              >
                HOME
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/about-us"
              >
                ABOUT US
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/companies"
              >
                ENTREPRENEURS
              </Link>

              <Link
                className="flex items-center px-3 font-bold text-emerald-900 active:text-red-500 hover:text-emerald-500"
                to="/investors"
              >
                INVESTORS
              </Link>
            </span>

            <Link
              to="/sign-in"className="flex items-center px-5 py-4 rounded-full font-bold text-white bg-emerald-500 hover:bg-emerald-300"
              
            >
              LP LOG IN
            </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;