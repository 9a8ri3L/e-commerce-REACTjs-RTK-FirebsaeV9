import styled from "styled-components";
import { Flex } from "../../config/variables";

const Spinner = () => {
  return (
    <StyledSpinner>
      <SpinnerLoader></SpinnerLoader>
      <h3>Loading...</h3>
      <h4>Please wait while loading your request.</h4>
    </StyledSpinner>
  );
};

export default Spinner;

const StyledSpinner = styled.div`
  position: fixed;
  ${Flex.flexCol}
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 3000;
  color: var(--text);
  gap: 20px;
`;

const SpinnerLoader = styled.div`
  ${Flex.flexCol}
  position: relative;
  width: 100px;
  height: 100px;
  border: 8px solid #666;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 8px solid;
    border-color: var(--primary) transparent transparent transparent;
    border-radius: 50%;
    animation: spin 3s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
