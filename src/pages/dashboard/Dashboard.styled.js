import styled from "styled-components";
import media from "styled-media-query";
import { Button, Container } from "../../styles/globalStyles";
import { Flex, space } from "../../config/variables";

export const StyledDashboard = styled.section`
  min-height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.text};
  ${Flex.flexCol}
  padding: ${space.xxlSpacing} 0;
  position: relative;
  overflow-x: hidden;
  ${media.lessThan("large")`
  padding: ${space.smSpacing};
  background: ${({ theme }) => theme.bg};
  padding: ${space.smSpacing};
  `}
`;

export const DashNav = styled.div`
  ${Flex.flexRow}
  z-index: 3000;
  width: 78%;
  background-color: ${({ theme }) => theme.bg};
  position: fixed;
  top: 68px;
  padding: ${space.smSpacing};
  border-bottom: 1px solid var(--primary);

  ${media.lessThan("large")`
  border-bottom: 1px solid var(--primary);
  border-top: 1px solid var(--primary);
  position: relative;
  width: 100%;
  padding-inline: ${space.mdSpacing};
  top: 200;
  right: 0;
  min-width: 95vw;
  z-index: 1000;
  overflow-x: hidden;
  ${Flex.flexCol}

  `}
`;

export const DashNavContainer = styled.div`
  padding: 0 ${space.smSpacing};
  ${Flex.flexRow}
  gap: 5px;
  justify-content: space-between;
  width: 100%;
  font-size: 00.85rem;

  ${media.lessThan("large")`
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 100%;
  `}
`;

export const Breadcrumbs = styled.div`
  text-align: start;
  width: 100%;
  ${Flex.flexRow}
  justify-content: flex-start;
  min-width: 30%;
  gap: 5px;
  flex: 1;
`;

export const All = styled.div`
  display: block;
  ${Flex.flexRow}
  align-items: center;
  text-align: left;
  cursor: pointer;
  color: var(--primary);
  &:hover {
    text-decoration: underline;
  }
`;

export const Filter = styled.span`
  text-align: left;
`;

export const SideBar = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2000;
  padding: 0;
  overflow-x: hidden;

  ${media.lessThan("large")`
  width: 100vw;
  `}
`;

export const SidebarContainer = styled(Container)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  &:focus-within {
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
    width: 0.5vw;
    background-color: transparent;
  }
`;

export const SidBarTitle = styled.div`
  ${Flex.flexRow}
  padding: ${space.smSpacing} ${space.lgSpacing};
  p {
    text-align: left;
    width: 100%;
    padding-top: ${space.mdSpacing};

    ${media.lessThan("large")`
    text-align: center;
    `}
  }
`;

export const SideBarBtns = styled.div`
  ${Flex.flexCol}
  padding: ${space.smSpacing};

  button {
    text-align: left;
  }

  & > * {
    min-width: 80%;
    border-radius: 0px;
  }

  ${media.lessThan("large")`
  flex-direction: row;
  flex-wrap: wrap;

  & > *{
      width: max-content;
    }

  `}
`;

export const Group = styled(Button)`
  /* ${Flex.flexCol} */
`;

export const GroupHeader = styled.div`
  ${Flex.flexRow}
  justify-content: space-between;
  width: 100%;
`;

export const GroupBody = styled.div`
  padding-inline-start: ${space.lgSpacing};
`;

export const GroupBtn = styled.div`
  min-width: 100%;
  padding: ${space.smSpacing};
  color: ${({ theme }) => theme.text};
  font-size: 0.72rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.bg};
  }
`;

export const DashContainer = styled(Container)`
  display: inline-grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-row-gap: 50px;
  min-height: calc(100vh - 200px);
  width: 100%;
  padding: ${space.lgSpacing} 0;
  z-index: 10;

  ${media.lessThan("large")`
  padding-top: ${space.huge};

  `}
`;

export const CardWrapper = styled.div`
  ${Flex.flexCol}
  align-self: flex-start;
  width: 230px;
  min-height: 350px;
  padding: ${space.mdSpacing};
  justify-content: space-between;
  background-color: transparent;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom: 5px solid var(--primary);
    box-shadow: -2px 0 20px ${({ theme }) => theme.sh};
    border-radius: 10px;
  }

  ${media.lessThan("large")`
  border-radius: 10px;
  box-shadow: -2px 0 20px ${({ theme }) => theme.sh};
  `}
`;

export const CardHeader = styled.div`
  overflow: hidden;
  position: relative;
`;

export const CardImg = styled.img`
  width: 300px;
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  background-size: cover;
  background-attachment: fixed;
  transform-origin: center;
  filter: brightness(80%);
  transition: all 0.5s ease-in-out;
`;

export const CardBody = styled.div`
  width: 100%;
`;

export const CardBodyTop = styled.div`
  ${Flex.flexCol}
  & > span {
    padding-top: ${space.smSpacing};
    width: 100%;
    text-align: left;
  }
`;

export const Title = styled.div`
  text-align: center;
  height: 50px;

  p {
    padding: ${space.smSpacing} 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const CardPrice = styled.div`
  ${Flex.flexRow}
  justify-content: start;
  gap: 5px;
  width: 100%;

  ${CardWrapper}:hover & {
    padding: ${space.mdSpacing} 0;
  }
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const Oprice = styled.span`
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: line-through 1px solid grey;
  ${Flex.flexRow}
`;

export const Discount = styled.span`
  ${Flex.flexRow}
  font-weight: bold;
  font-size: 0.75rem;
  color: var(--primary);
`;

export const CardCalcs = styled.div`
  ${Flex.flexCol};
  text-align: center;
  padding: ${space.smSpacing} 0;

  div {
    color: var(--primary);
  }
`;

export const CardTotalInfo = styled.div`
  ${Flex.flexCol}
  gap: 5px;
  width: 100%;
  padding: ${space.mdSpacing} 0;
`;

export const CardBG = styled.div`
  ${Flex.flexRow}
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.CardBG};
`;

export const TotalPrice = styled.div``;

export const TotalSavings = styled.div`
  z-index: 100;
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary);
`;

export const CardDesc = styled.div`
  p {
    padding: ${space.mdSpacing} 0;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;

    ${CardWrapper}:hover & {
      ${Flex.flexRow}
      white-space: unset;
      text-overflow: unset;
      position: absolute;
      bottom: 48%;
      height: 52%;
      max-width: 100%;
      left: 0;
      padding: ${space.mdSpacing};
      color: var(--sec);
      background-color: var(--text);
    }
  }
`;

export const CardBtns = styled.div`
  ${Flex.flexCol}
`;

export const CardAddedInfo = styled.div`
  ${Flex.flexCol}
  width: 100%;
`;

export const CardBtnsAfterBuy = styled.div`
  ${Flex.flexCol}
  gap: 5px;
`;

export const CardBtn = styled(Button)`
  ${Flex.flexRow}
  gap: 10px;
  text-align: center;
  width: 100%;
  border: 1px solid var(--primary);
`;
