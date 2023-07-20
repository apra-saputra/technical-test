import { useState } from "react";
import useHandleNavigation from "../hooks/useHandleNavigation";
import CustomButton from "./elements/CustomButton";
import { MENU } from "../utils/constant";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropDown = () => {
    setShowDropdown((state) => !state);
  };

  const { handleNavigation } = useHandleNavigation();

  return (
    <header className="fixed w-full z-20 top-0 left-0">
      <nav className="w-full shadow transition-all duration-500  bg-base-primary bg-primary">
        <div className="justify-between px-4 mx-auto md:items-center md:flex max-w-screen-2xl">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h1 className="font-extrabold text-2xl text-slate-100 cursor-default">
              Navbar
            </h1>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md focus:border-gray-400 border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <div
              className={`relative flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex items-center justify-center md:flex-row flex-col gap-10">
                <li>
                  <CustomButton
                    onClick={() => (handleNavigation("/"), setNavbar(false))}
                    className="text-slate-100"
                  >
                    Home
                  </CustomButton>
                </li>
                <li className={`${navbar ? "hidden" : "block"}`}>
                  <CustomButton
                    onClick={handleDropDown}
                    className="text-slate-100"
                  >
                    Menu
                  </CustomButton>
                </li>
              </ul>
              {showDropdown && (
                <ul
                  className={`absolute 2xl:right-[-40%] xl:right-[-20%] lg:right-[-10%] right-0 top-10 w-32 flex items-center justify-center flex-col gap-4 ${
                    navbar ? "hidden" : "block"
                  } bg-slate-600 px-4 py-4 rounded`}
                >
                  {MENU.map((item, index) => {
                    return (
                      <li key={index}>
                        <CustomButton
                          onClick={() => (
                            handleNavigation(item.path), handleDropDown()
                          )}
                          className="text-slate-100"
                        >
                          {item.title}
                        </CustomButton>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
