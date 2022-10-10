import { Flex, space } from "../../config/variables";
import styled from "styled-components";

export const StyledLogin = styled.section`
  min-height: calc(100vh - ${space.headerHeight});
  ${Flex.flexCol}
  position: relative;
`;

export const LoginCheckboxInput = styled.div`
  ${Flex.flexRow}
  color: var(--sec);
  gap: 10px;
  align-self: flex-start;
`;
