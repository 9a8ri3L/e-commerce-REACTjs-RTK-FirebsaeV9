import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  encryptedUser,
  logout,
  removeUser,
  resetUser
} from "../../features/auth/authSlice";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { useState } from "react";
import Cart from "../cart/Cart";
import {
  cartTotalQtyCalc,
  clearCart,
  toggleCart
} from "../../features/cart/cartSlice";
import {
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  CartIcon,
  NotLoggedIn,
  Icons,
  StyledHeader,
  ToggleThemeIcon,
  LoggedIn
} from "./Header.styled";
import { Button } from "../../styles/globalStyles";
import { ToggleIcon } from "./Toggle";
import { useEffect } from "react";
import { resetProducts } from "../../features/products/productSlice";

const Header = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { cart, showCart, cartTotalQty } = useSelector(state => state.cart);
  const [click, setClick] = useState(false);
  const joinedAt = encryptedUser.getItem("_info")?.createdAt;

  const handleClick = () => setClick(!click);

  const handleLogout = async () => {
    dispatch(removeUser());
    navigate("/");
    dispatch(clearCart());
    dispatch(resetUser());
    dispatch(resetProducts());
    dispatch(logout());
  };

  useEffect(() => {
    user?.isVerified && dispatch(cartTotalQtyCalc());
  }, [cart]);

  if (showCart) {
    return <Cart />;
  }

  return (
    <>
      <StyledHeader>
        <NavbarContainer>
          <NavLogo to="/">
            Online<span>store</span>.
          </NavLogo>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks onClick={handleClick} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleClick} to="/about/">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleClick} to="/contact/">
                contact
              </NavLinks>
            </NavItem>
            <ToggleThemeIcon>
              <ToggleIcon theme={theme} toggleTheme={toggleTheme} />
            </ToggleThemeIcon>
            <NavItem>
              {!user ? (
                <NotLoggedIn>
                  <NavItemBtn>
                    <NavBtnLink to="/register/">
                      <Button mw="105px">SIGN UP</Button>
                    </NavBtnLink>
                    <NavBtnLink to="/login/">
                      <Button mw="105px">Login</Button>
                    </NavBtnLink>
                  </NavItemBtn>
                </NotLoggedIn>
              ) : (
                <LoggedIn>
                  <NavItemBtn>
                    <NavBtnLink to="/">
                      <Button mw="105px" onClick={() => handleLogout()}>
                        Logout
                      </Button>
                    </NavBtnLink>
                    <NavBtnLink to={user?.isVerified ? "/dashboard" : "/"}>
                      <Button mw="105px">Store</Button>
                    </NavBtnLink>
                  </NavItemBtn>
                  <p>
                    {!user.isVerified
                      ? "Please verify your E-Mail!"
                      : `Welcome Back, ${user.name}!`}
                    <br />
                    <span> | Joined {joinedAt.substring(8, 16)} |</span>
                  </p>
                  <Icons>
                    {user.isVerified && (
                      <CartIcon
                        data-cart={cartTotalQty}
                        // data-cart={cart.length}
                        onClick={() => dispatch(toggleCart())}
                      >
                        <FiShoppingCart size={30} />
                      </CartIcon>
                    )}
                  </Icons>
                </LoggedIn>
              )}
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
