import { FaMinusCircle } from "@react-icons/all-files/fa/FaMinusCircle";
import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";
import styled from "styled-components";
import media from "styled-media-query";
import { Button, Container } from "../../styles/globalStyles";
import { Flex, space } from "../../config/variables";

export const CartCom = styled.section`
  ${Flex.flexRow}
  height: 100vh;
  overflow-y: auto;
  z-index: 10000;
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.bg};
  &:focus-within {
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    transition: all 0.5s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.text};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ${media.lessThan("large")`
    padding: 0;
  `}
`;

export const CartContainer = styled(Container)`
  padding: ${space.smSpacing};
  ${Flex.flexCol}
  height: 100vh;
  width: 95%;
  justify-content: space-between;

  ${media.lessThan("large")`
    padding-bottom: ${space.lgSpacing} ;
  `}
`;

export const CartHeader = styled.div`
  ${Flex.flexCol}
  gap: 15px;
  width: 100%;
  padding: ${space.mdSpacing};
  h1 {
    font-size: clamp(5vw, 8vw, 2.5vmax);
    font-weight: bold;
    text-align: center;
  }
  ${media.lessThan("large")`
  padding: ${space.smSpacing} 0;
  `}
`;

export const CartCloseBtn = styled.div`
  cursor: pointer;
  align-self: flex-start;
  color: var(--primary);
`;

export const CartEmpty = styled.div`
  ${Flex.flexCol}
  gap: 35vh;
  padding: ${space.xxlSpacing};
  width: 90%;

  p {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
  }

  ${media.lessThan("large")`
  padding: ${space.lgSpacing} 0;
  `}
`;

export const CartGoToShoppingBtn = styled(Button)`
  ${space.mdSpacing}
`;

export const CartItem = styled.div`
  width: 100%;
  ${Flex.flexCol}
  h3 {
    font-size: clamp(2vmax, 5vw, 1vmax);
    color: var(--primary);
    padding: ${space.mdSpacing} 0;
    text-align: center;

    span {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const CartItemContainer = styled(Container)`
  ${Flex.flexRow}
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.text};

  ${media.lessThan("large")`
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-inline: 0;
  `}
`;

export const CartItemLeft = styled.div`
  ${Flex.flexCol}
  align-items: flex-start;
  gap: 15px;
  h2 {
    font-weight: bold;
  }
  img {
    width: 50%;
  }

  ${media.lessThan("large")`
  align-items: center;
  `}
`;

export const CartBtn = styled(Button)`
  width: max-content;
`;

export const CartItemRight = styled.div`
  flex: 1;
  ${Flex.flexCol}
  align-items: flex-start;
  gap: 15px;

  & b {
    font-size: 1.3rem;
    color: var(--primary);
  }
`;

export const CartItemQty = styled.div`
  ${Flex.flexRow}
  gap: 10px;
`;

export const CartQtyBtns = styled.div`
  ${Flex.flexRow}
  gap: 10px;
`;

export const CartFaMinusCircle = styled(FaMinusCircle)`
  cursor: pointer;
`;

export const CartFaPlusCircle = styled(FaPlusCircle)`
  cursor: pointer;
`;

export const CartItemFooter = styled.div`
  ${Flex.flexRow}
  justify-content: space-between;
  width: 100%;
  padding: ${space.lgSpacing};
  border-top: 1px solid ${({ theme }) => theme.text};

  ${media.lessThan("large")`
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
  `}
`;

export const CartFooterLeft = styled.div`
  ${Flex.flexCol}
  gap: 15px;
  ${media.lessThan("large")`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 20px;
  `}
`;

export const CartFooterRight = styled.div`
  ${Flex.flexCol}
  align-items: start;
  gap: 15px;
  & b {
    font-size: 1.3rem;
    color: var(--primary);
  }
`;
