import styled from "styled-components";
import { Flex } from "../../config/variables";

export const ScrollUp = styled.div`
  ${Flex.flexCol}
  position: fixed;
  bottom: 5%;
  right: 0%;
  color: var(--primary);
  z-index: 2000;
  cursor: pointer;
  background-color: transparent;

  p{
    writing-mode: vertical-lr;
    rotate: 180deg;
  }
  `;
