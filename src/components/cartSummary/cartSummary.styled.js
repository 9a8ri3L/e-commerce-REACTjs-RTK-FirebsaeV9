import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import { space } from "../../config/variables";

export const CartSummaryContainer = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content );
  grid-column-gap: 20px;
  text-align: center;
  padding: ${space.smSpacing};
  b {
    display: inline-block;
    font-size: 0.8rem;
    span {
      width: min-content;
      color: var(--primary);
      font-size: 0.9rem;
    }
  }
`;
