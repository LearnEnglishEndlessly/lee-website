import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="#home">Home</NavLink>
      <NavLink to="#about">About</NavLink>
      <NavLink to="#faq">FAQ</NavLink>
      <NavLink to="" className="py-2 px-4 rounded-md text-white bg-redlee">
        Discord
      </NavLink>
    </>
  );
};

export default Navigation;
