import { GroupBody, GroupBtn } from "../../pages/dashboard/Dashboard.styled";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/products/productSlice";

const Accordion = ({ title, onclick, isOpen }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <GroupBody>
          <GroupBtn onClick={() => dispatch(filterProducts(onclick))}>
            - {title}
          </GroupBtn>
        </GroupBody>
      )}
    </>
  );
};
export default Accordion;
