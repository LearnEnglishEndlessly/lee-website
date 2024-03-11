// Icons
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";

export const MenuButton = () => {
  return (
    <>
      <img src={Menu} alt="menu.svg" className="w-8 h-8" />
    </>
  );
};

export const CloseButton = () => {
  return (
    <>
      <img src={Close} alt="close.svg" className="w-8 h-8" />
    </>
  );
};
