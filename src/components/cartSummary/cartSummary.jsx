import { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  disTotalCalc,
  subTotalCalc
} from "../../features/cart/cartSlice";
import { Button } from "../../styles/globalStyles";
import { CartSummaryContainer } from "./cartSummary.styled";

const CartSummary = () => {
  const dispatch = useDispatch();
  const { cart, cartTotalAmount, disTotal } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(subTotalCalc());
    dispatch(disTotalCalc());
  }, [cart]);

  return (
    <div>
      <CartSummaryContainer>
        <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        <b>
          Subtotal
          <br />
          <span>${cartTotalAmount}</span>
        </b>
        <b>
          Total savings
          <br />
          <span>${disTotal}</span>
        </b>
      </CartSummaryContainer>
    </div>
  );
};
export default memo(CartSummary);
