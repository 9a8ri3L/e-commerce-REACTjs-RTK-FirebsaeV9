import { BsMoon } from "@react-icons/all-files/bs/BsMoon";
import { BiSun } from "@react-icons/all-files/bi/BiSun";


export const ToggleIcon = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <BsMoon size={20} /> : <BiSun size={20} />}
    </div>
  );
};
