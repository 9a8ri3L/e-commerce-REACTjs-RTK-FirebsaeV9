import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/globalStyles";
import useTitle from "../../helpers/useTitle";
import { HomeContainer, StyledHome } from "./Home.styled";
import { space } from "../../config/variables";

const Home = () => {
  useTitle("ONLINEstore | Home");
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  /**
   * If the user is verified, navigate to the dashboard, otherwise navigate to the home page.
   * If the user is not logged in, navigate to the login page
   */
  const getStarted = () => {
    if (user?.isVerified) {
      navigate("/Dashboard");
    } else {
      navigate("/");
    }
    !user && navigate("/login");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledHome>
      <HomeContainer className="overlay">
        <h1>
          SHOPPING IS <br />
          NO LONGER DIFFICULT AS BEFORE
        </h1>
        <Button
          sec
          white
          fontBig
          pa={`${space.mdSpacing}`}
          onClick={getStarted}
        >
          start shopping now
        </Button>
      </HomeContainer>
    </StyledHome>
  );
};

export default Home;
