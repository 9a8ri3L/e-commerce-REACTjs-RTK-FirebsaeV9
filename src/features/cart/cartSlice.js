import { createSlice } from "@reduxjs/toolkit";
import { EncryptStorage } from "encrypt-storage";
import { origPrice } from "../../helpers/calcsFunctions";

export const encryptedCart = new EncryptStorage(
  process.env.REACT_APP_ENCRYPT_STORAGE,
  {
    prefix: "@_basket",
  }
);

export const getLSCart = encryptedCart.getItem("_bs");
export const setLSCart = (cart) => encryptedCart.setItem("_bs", cart);
export const getLSTotalAmount = encryptedCart.getItem("_ta");
export const setLSTotalAmount = (totalAmount) =>
  encryptedCart.setItem("_ta", totalAmount);
const initialState = {
  cart: getLSCart ? getLSCart : [],
  disTotal: 0,
  cartTotalAmount: getLSTotalAmount ? getLSTotalAmount : 0,
  cartTotalQty: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload || [];
    },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].itemQty += 1;
      } else {
        state.cart = [{ ...action.payload, itemQty: 1 }, ...state.cart];
      }
      setLSCart(state.cart), setLSTotalAmount(state.cartTotalAmount);
    },
    decreaseQty: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].itemQty === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart[itemIndex].itemQty -= 1;
      }
      state.cart.length === 0
        ? ((state.cartTotalAmount = 0), (state.disTotal = 0))
        : null;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart.length === 0
        ? ((state.cartTotalAmount = 0), (state.disTotal = 0))
        : null;
      setLSCart(state.cart), setLSTotalAmount(state.cartTotalAmount);
    },
    clearCart: (state) => {
      state.cart = [];
      state.showCart = false;
      state.cartTotalAmount = 0;
      state.cartTotalQty = 0;
      state.disTotal = 0;
      encryptedCart.removeItem("_bs");
      encryptedCart.removeItem("_ta");
    },
    subTotalCalc: (state) => {
      const itemTotal = [];
      state.cart &&
        state.cart.map((item) => {
          itemTotal.push(item.itemQty * item.price);
          item && item
            ? (state.cartTotalAmount = itemTotal.reduce(
                (acc, curr) => (acc += curr),
                0
              ))
            : (state.cartTotalAmount = 0);
          return state.cartTotalAmount;
        });
    },
    disTotalCalc: (state) => {
      const itemDisTotal = [];
      state.cart &&
        state.cart.map((item) => {
          const oPrice = origPrice(item.price, item.discountPercentage);
          itemDisTotal.push(oPrice * item.itemQty);
          const itemDisSubTotal = itemDisTotal.reduce(
            (acc, curr) => (acc += curr),
            0
          );
          return (state.disTotal = (
            itemDisSubTotal - state.cartTotalAmount
          ).toFixed(2));
        });
    },
    cartTotalQtyCalc: (state) => {
      state.cartTotalQty = state.cart.reduce(
        (total, item) => total + item.itemQty,
        0
      );
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});
export const {
  setCart,
  addToCart,
  decreaseQty,
  handleItemQty,
  removeFromCart,
  deleteFromCart,
  cartTotalQtyCalc,
  clearCart,
  subTotalCalc,
  disTotalCalc,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
