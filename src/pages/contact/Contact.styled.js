import styled from "styled-components";
import media from "styled-media-query";
import { Flex, space } from "../../config/variables";

export const StyledContact = styled.section`
  ${Flex.flexCol}
  gap: 10px;
  padding: ${space.lgSpacing};
  margin: 0 auto;
  text-align: justify;
  width: 70%;

  ${media.lessThan("large")`
  width: 95%;
  `}
`;
