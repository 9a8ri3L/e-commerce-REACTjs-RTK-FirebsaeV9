import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  cartTotalQtyCalc,
  clearCart,
  decreaseQty,
  disTotalCalc,
  removeFromCart,
  subTotalCalc,
  toggleCart
} from "../../features/cart/cartSlice";
import { IoMdCloseCircle } from "@react-icons/all-files/io/IoMdCloseCircle";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import {
  CartBtn,
  CartCloseBtn,
  CartCom,
  CartContainer,
  CartEmpty,
  CartFaMinusCircle,
  CartFaPlusCircle,
  CartFooterLeft,
  CartFooterRight,
  CartGoToShoppingBtn,
  CartHeader,
  CartItem,
  CartItemContainer,
  CartItemFooter,
  CartItemLeft,
  CartItemQty,
  CartItemRight,
  CartQtyBtns
} from "./Cart.styled";
import { Button } from "../../styles/globalStyles";
import useTitle from "../../helpers/useTitle";
import { disCalc, origPrice } from "../../helpers/calcsFunctions";

const Cart = () => {
  useTitle("ONLINEstore - Shopping Cart");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, disTotal, cartTotalAmount, cartTotalQty } = useSelector(
    state => state.cart
  );
  const { user } = useSelector(state => state.auth);

  /**
   * @function to dispatch an action to increase the qty of a specified item.
   * @param {object} item a product item
   */
  const increaseItemQty = item => {
    dispatch(addToCart(item));
  };

  /**
   * It clears the shopping cart, toggles the cart, and updates the document in the firebase database
   */
  const clearShoppingCart = () => {
    dispatch(clearCart());
  };

  /**
   * @function to dispatch an action to decrease the qty of a specified item.
   * @param {object} item a product item
   */
  const decreaseItemQty = item => {
    dispatch(decreaseQty(item));
  };

  /**
   * It removes an item completely from the cart.
   */
  const removeItemFromCart = async item => {
    dispatch(removeFromCart(item));
  };

  /* A useEffect hook that is triggered when the cart changes. It calculates the subtotal, discount
  total, and the total qty of the cart. */
  useEffect(() => {
    user?.isVerified && dispatch(subTotalCalc());
    dispatch(disTotalCalc());
    dispatch(cartTotalQtyCalc());
  }, [cart]);

  return (
    <>
      <CartCom>
        <CartContainer>
          <CartHeader>
            <CartCloseBtn>
              <IoMdCloseCircle
                size={35}
                onClick={() => dispatch(toggleCart())}
              />
            </CartCloseBtn>
            <h1>Your shopping Cart</h1>
          </CartHeader>
          {cart.length === 0 ? (
            <CartEmpty>
              <p>Cart is empty</p>
              <CartGoToShoppingBtn
                className="back"
                onClick={() => {
                  navigate("/Dashboard"), dispatch(toggleCart());
                }}
              >
                Go to shopping
              </CartGoToShoppingBtn>
            </CartEmpty>
          ) : (
            <CartItem>
              <h3>
                You have{" "}
                <span>
                  {cartTotalQty === 1
                    ? " 1 product "
                    : ` ${cartTotalQty} products `}
                </span>
                in your shopping cart
              </h3>
              {cart.map(item => {
                return (
                  <CartItemContainer key={item.id}>
                    <CartItemLeft>
                      <h2>{item.title}</h2>
                      <img src={item.thumbnail} alt={item.title} />
                      <CartBtn
                        onClick={() => {
                          removeItemFromCart(item);
                        }}
                      >
                        Remove from cart <MdDelete />
                      </CartBtn>
                    </CartItemLeft>
                    <CartItemRight>
                      <span>
                        Original Price: ${" "}
                        {origPrice(item.price, item.discountPercentage)}
                      </span>
                      <span>Discount: {item.discountPercentage} %</span>
                      <span>Price: $ {item.price}</span>

                      <CartItemQty>
                        <span>Qty: </span>
                        <CartQtyBtns>
                          <CartFaMinusCircle
                            size={20}
                            color={"var(--primary)"}
                            onClick={() => {
                              decreaseItemQty(item);
                            }}
                          />
                          <span>{item.itemQty}</span>
                          <CartFaPlusCircle
                            size={20}
                            color={"var(--primary)"}
                            onClick={() => {
                              increaseItemQty(item);
                            }}
                          />
                        </CartQtyBtns>
                      </CartItemQty>
                      <span>
                        You saved: $
                        {disCalc(
                          item.price,
                          item.discountPercentage,
                          item.itemQty
                        )}
                      </span>
                      <b>Total Price: ${item.price * item.itemQty}</b>
                    </CartItemRight>
                  </CartItemContainer>
                );
              })}

              <CartItemFooter>
                <CartFooterLeft>
                  <CartBtn
                    mw="200px"
                    onClick={() => {
                      clearShoppingCart();
                    }}
                  >
                    Clear Cart
                  </CartBtn>
                  <CartBtn
                    mw="200px"
                    bg="var(--primary)"
                    white
                    onClick={() => dispatch(toggleCart())}
                  >
                    Continue Shopping
                  </CartBtn>
                </CartFooterLeft>
                <CartFooterRight>
                  <p>
                    Your total savings: <span>{disTotal} $</span>
                  </p>
                  <b>Subtotal: {cartTotalAmount} $</b>
                  <Button mw="15vw" white bg="var(--primary)">
                    <p>Proceed to checkout</p>
                  </Button>
                </CartFooterRight>
              </CartItemFooter>
            </CartItem>
          )}
        </CartContainer>
      </CartCom>
    </>
  );
};
export default Cart;
