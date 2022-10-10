import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../styles/globalStyles";
import { Flex } from "../../config/variables";
import styled from "styled-components";
import useTitle from "../../helpers/useTitle";

export default function SuccessRegister({ email, name }) {
  useTitle("ONLINEstore - Thank you");
  const mail = "https://www." + email?.substring(email?.indexOf("@") + 1);
  const navigate = useNavigate();

  return (
    <StyledSuccess>
      <OverLay>
        <Modal>
          <span>
            Thank you <em>{name}</em>
          </span>
          <br />
          You have successfully registered!
          <br />A verification message has been sent to <span>{email}</span>
          <br />
          Please check your mail to verify your account.
        </Modal>
        <Btns>
          <LinkToHome onClick={() => navigate("/")} mw="9.5vw">
            Home
          </LinkToHome>
          <Redirect href={mail} target="_blank">
            go to mail
          </Redirect>
        </Btns>
      </OverLay>
    </StyledSuccess>
  );
}

const StyledSuccess = styled(Container)`
  height: 100vh;
`;

const OverLay = styled.div`
  ${Flex.flexCol}
  gap: 50px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0px;
  background-color: ${({ theme }) => theme.bg};
  z-index: 2000;
  text-align: center;
`;

const LinkToHome = styled(Button)`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text};
`;

const Modal = styled.div`
  margin-top: 50px;
  font-size: 25px50px;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;

  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 3rem;
  }
`;

const Redirect = styled.a`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text};

  transition: all 0.3s ease-in-out;
  width: 9.5vw;
  height: 35px;
  &:hover {
    background-color: var(--primary);
    color: wheat;
  }
`;

const Btns = styled.div`
  ${Flex.flexRow}
  font-size: 0.75rem;
  gap: 15px;
`;
