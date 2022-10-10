import styled from "styled-components";
import media from "styled-media-query";
import { Container } from "../../styles/globalStyles";
import { Flex, space } from "../../config/variables";

export const StyledHome = styled.section`
  ${Flex.flexCol}
  background: linear-gradient(
  -230deg,
  rgba(255, 0, 150, 0.3) 20%,
  rgba(255, 0, 150, 0.3) 60%,
  var(--primary) 10%
  ),
  url("/bg-4.webp");
  box-shadow: 0 0 20px #121212;
  background-position: 80%;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: calc(100vh - ${space.headerHeight});
  width: 100%;

  ${media.lessThan("medium")`
  background-position: center;

  `}
`;

export const HomeContainer = styled(Container)`
  ${Flex.flexRow}
  background-color: rgba(0,0,0,0.1);
  justify-self: flex-end;
  width: 80vw;

  ${media.lessThan("medium")`
  flex-direction: column;
  width: 90%;
  gap: 20px;
  `}

  h1 {
    font-size: 4vmax;
    color: white;
    text-align: center;
  }
`;
