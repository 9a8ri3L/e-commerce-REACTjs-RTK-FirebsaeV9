import { RiArrowUpSLine } from "@react-icons/all-files/ri/RiArrowUpSLine";
import { useEffect, useState } from "react";
import { ScrollUp } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const [btn, setBtn] = useState(false);

  const ScrollToTopHandler = () =>{
    window.scrollY > 50 ? setBtn(true) : setBtn(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", ScrollToTopHandler);
    return ()=>{
      window.removeEventListener("scroll", ScrollToTopHandler)
    }
  }, []);

  const onClick = () => {
    window.scrollTo(0, -100);
  };

  return (
    <ScrollUp onClick={() => onClick()}>
      {btn && (<><p> Scroll to top</p><RiArrowUpSLine size={50} /></>)}
    </ScrollUp>
  );
};
export default ScrollToTop;
