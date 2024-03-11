import Logo from "./assets/logo_lee.svg";
import Banner from "./assets/banner_img.png";
import { NavLink, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import { MenuButton, CloseButton } from "./components/NavButton";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container w-page_center mx-auto" id="home">
        {/* Navbar */}
        <div
          className="flex justify-between font-medium pt-4 items-center relative"
          id="navbar"
        >
          <NavLink to="#">
            <img src={Logo} alt="logo.png" className="w-[80%]" />
          </NavLink>
          <div className="hidden md:inline space-x-20 text-lg">
            <Navigation />
          </div>
          <div className="md:hidden">
            <button className="cursor-pointer" onClick={toggleNavbar}>
              {isOpen ? <CloseButton /> : <MenuButton />}
            </button>
            {isOpen ? (
              <div className="absolute space-y-4 mt-10 z-10 top-full left-0 right-0 flex flex-col text-center">
                <Navigation />
              </div>
            ) : null}
          </div>
        </div>
        {/* End of Navbar */}

        {/* Banner */}
        <div className="flex justify-between mt-14">
          <div className="my-auto">
            <h1 className="text-header leading-none font-bold">
              Get Started. <br />
              Learn English Endlessly.
            </h1>
            <p className="text-basefont font-light my-6">
              We are dedicated to design this courses special for you
              independent learners.
            </p>
            <Link to="/sources">
              <button className="py-3 px-6 uppercase bg-redlee text-white font-semibold text-xl rounded-md">
                learn now
              </button>
            </Link>
          </div>
          <div className="w-[350px] h-[350px] overflow-hidden rounded-full">
            <img src={Banner} alt="banner.svg" className="bg-[#d9d9d9] w-full rounded-full" />
          </div>
        </div>
        {/* End of Banner */}
      </div>
    </>
  );
}

export default App;
