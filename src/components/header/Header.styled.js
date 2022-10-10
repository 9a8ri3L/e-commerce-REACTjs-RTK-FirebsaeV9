import styled, { useTheme } from "styled-components";
import { FaMagento } from "@react-icons/all-files/fa/FaMagento";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../../styles/globalStyles.js";
import { Flex, space } from "../../config/variables";
import media from "styled-media-query";

export const StyledHeader = styled.header`
  ${Flex.flexRow}
  width: 100vw;
  height: ${space.headerHeight};
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 2000;
  background-color: ${({ theme }) => theme.bg};
`;

export const NavbarContainer = styled(Container)`
  ${Flex.flexRow}
  gap: 20px;
  ${media.lessThan("large")`
    width: 100%;
    justify-content: space-between;
`}
`;

export const NavLogo = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  color: var(--primary);
  span {
    text-transform: lowercase;
    color: ${({ theme }) => theme.text};
    font-weight: lighter;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  display: none;
`;

export const MobileIcon = styled.div`
  display: none;

  ${media.lessThan("large")`
  color: var(--primary);
  display: block;
  position: absolute;
  top: 25%;
  right: 5%;
  font-size: 1.8rem;
  cursor: pointer;
  `}
`;

export const NavMenu = styled.ul`
  ${Flex.flexRow}
  gap: 10px;
  text-align: center;

  ${media.lessThan("large")`
    background-color: ${({ theme }) => theme.bg};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    inset: 0%;
    gap: 0;
    left: ${({ click }) => (click ? 0 : "-200%")};
    opacity: 1;
    transition: all 0.5s ease;

  `}
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  ${Flex.flexRow}
  transition: all 0.3s ease-in-out;
  min-width: 105px;

  &:not(:last-child):hover {
    border-bottom: 5px solid var(--primary);
  }

  & a.active {
    color: var(--primary);
    font-weight: bold;
  }

  ${media.lessThan("large")`
  width: 100%;
  & > * {
    padding-top: ${space.smSpacing};
  }
  &:hover {
    border: none;
  }
  `}
`;

export const NavLinks = styled(NavLink)`
  ${media.lessThan("large")`
    padding: ${space.smSpacing};


  `}
`;

export const NavItemBtn = styled.div`
  display: flex;
  padding: ${space.mdSpacing};
  gap: 15px;
  margin: 0 15px;
`;

export const NavBtnLink = styled(Link)`
  padding: 0;
`;

export const Icons = styled.div`
  ${Flex.flexRow}
  ${media.lessThan("large")`
    margin-top: 20px;

  `}
`;

export const CartIcon = styled.div`
  font-size: clamp(5vmin, 7vmin, 2rem);
  cursor: pointer;
  position: relative;

  &::after {
    content: attr(data-cart);
    font-size: 0.8rem;
    font-weight: bold;
    padding: 3px;
    margin: 0;
    ${Flex.flexRow}
    border: 2px solid white;
    position: absolute;
    height: 27px;
    width: 27px;
    color: white;
    border-radius: 50%;
    top: 10%;
    right: -70%;
    background: #ff0096;
  }
`;

export const LoggedIn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 0.8rem;
    min-width: 22vw;
    text-align: center;
  }

  & p span {
    color: var(--primary);
    font-weight: bold;
  }

  ${media.lessThan("large")`
  ${Flex.flexCol}

  `}
`;

export const NotLoggedIn = styled.div`
  ${Flex.flexRow}

  ${media.lessThan("large")`
flex-direction: column;
`}
`;

export const ToggleThemeIcon = styled.div`
  cursor: pointer;
`;
