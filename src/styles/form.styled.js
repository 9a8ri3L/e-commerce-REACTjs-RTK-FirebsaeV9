import styled from "styled-components";
import media from "styled-media-query";
import { Flex, space } from "../config/variables";
import { Container } from "./globalStyles";

export const StyledFormContainer = styled(Container)`
  ${Flex.flexCol}
  width: 100%;
  height: 100%;
  background-color: yellowgreen;
`;

export const StyledForm = styled.form`
  ${Flex.flexCol}
  gap: 10px;
  justify-content: space-around;
  max-width: 50%;

  ${media.lessThan("medium")`
  min-width: 95%
`}
`;

export const StyledFormHeader = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: var(--sec);
  padding: ${space.mdSpacing};

  h1 {
    color: var(--primary);
    font-size: clamp(1.5rem, 3vw, 4vw);
  }
`;

export const StyledTextInput = styled.input`
  width: 100%;
  height: 35px;
  font-size: 0.9rem;
  padding: ${space.smSpacing};
  border: none;
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
`;

export const StyledLinks = styled.div`
  color: var(--sec);
  text-decoration: underline;
`;
