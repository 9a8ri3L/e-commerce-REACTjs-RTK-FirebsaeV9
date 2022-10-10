import { Link, NavLink } from "react-router-dom";
import { NavLogo } from "../header/Header.styled";
import {
  FooterContainer,
  FooterLeft,
  FooterMiddle,
  StyledFooter,
} from "./Footer.styled";


const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLeft>
          <NavLogo to="/">
            Online<span>store</span>.
          </NavLogo>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </FooterLeft>
        <FooterMiddle>
          <p>
            <Link
              to="/mail/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:info@devgr.com";
              }}
              style={{ textTransform: "lowercase" }}
            >
              info@devgr.com
            </Link>
          </p>
          <span>&copy; {new Date().getFullYear()} All rights Reserved</span>
        </FooterMiddle>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            vel rem porro ad, harum molestias.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
          <p>012 3456 78910</p>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
