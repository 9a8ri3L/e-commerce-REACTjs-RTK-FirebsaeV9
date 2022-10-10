import styled from "styled-components";
import media from "styled-media-query";
import { Container } from "../../styles/globalStyles";
import { Flex, space } from "../../config/variables";

export const StyledFooter = styled.footer`
  ${Flex.flexCol}
  width: 100vw;
  text-align: center;
  padding: ${space.mdSpacing};
  bottom: 0;
  z-index: -1;
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  place-items: center;

  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  grid-gap: 20px;
  `}
`;

export const FooterLeft = styled.div`
  ${Flex.flexCol}
  justify-self: left;
  align-items: flex-start;
  flex: 1;

  ul {
    width: 100%;
  }
  li {
    ${Flex.flexRow}
    justify-content: flex-start;
  }
`;

export const FooterMiddle = styled.div`
  ${Flex.flexCol}
  flex-grow: 2;

  p a,
  span {
    color: var(--primary);
  }
`;

export const FooterRight = styled.div`
  ${Flex.flexCol}
  flex-shrink: 1;
`;
