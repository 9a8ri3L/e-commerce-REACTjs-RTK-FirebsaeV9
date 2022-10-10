import { Flex, space } from "../../config/variables";
import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import media from "styled-media-query";

export const StyledResetPassword = styled.section`
  height: 100vh;
  ${Flex.flexCol}
`;

export const ResetPasswordLinks = styled.div`
  & > a {
    color: var(--primary);
    text-decoration: underline;
  }
`;
