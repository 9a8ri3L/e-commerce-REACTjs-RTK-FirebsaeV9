import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Contact, Login, Register, Loggedin } from "./pages";
import { Header, Footer } from "./components";
import { RequireAuth } from "./features";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import useDarkMode from "./styles/useDarkMode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./components/scrollToTop/ScrollToTp";
import {
  getCartFromFirebase,
  setDocCartToFirebase
} from "./features/firebase/firebaseFunctions";

function App() {
  const { user } = useSelector(state => state.auth);
  const { cart, cartTotalAmount } = useSelector(state => state.cart);
  const { theme, toggleTheme } = useDarkMode();
  const [currTheme, setCurrTheme] = useState(lightTheme);
  const dispatch = useDispatch();

  /* Setting the theme to dark or light based on the theme state. */
  useEffect(() => {
    theme === "dark" ? setCurrTheme(darkTheme) : setCurrTheme(lightTheme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    user?.isVerified && getCartFromFirebase({ user, dispatch });
  }, [user !== null]);

  useEffect(() => {
    setDocCartToFirebase({ user, cartTotalAmount, cart });
  }, [cartTotalAmount]);

  return (
    <ThemeProvider theme={currTheme}>
      <ScrollToTop />
      <StyledApp>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Loggedin />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
`;
