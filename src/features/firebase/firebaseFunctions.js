import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  clearCart,
  setCart,
  setLSCart,
  setLSTotalAmount
} from "../cart/cartSlice";
import { db } from "../firebase/firebaseConfig";

/**
 *
 * @param {object} user user object of the auth reducer
 * @param {hook} dispatch to access the redux dispatch function
 * @returns setCart(), setLSCart(), setLSTotalAmount()
 *
 * @function to run one time on login or @refresh depends on [user !== null],
 * it checks first if the cart field in doc() is not empty, then if so, it set @local cart state with
 * the cart field, set an encryptd @localStorage with the value of fields [cart, cartTotalAmount],
 * if there's no doc() at all, it resets the @local cart state with dispatch clearCart().
 */

export const getCartFromFirebase = async ({ user, dispatch }) => {
  const cartRef = doc(db, user.uid, `cart-${user.uid}`);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.data()?.cart.length > 0) {
    return (
      dispatch(setCart(cartSnap.data().cart)),
      setLSCart(cartSnap.data().cart),
      setLSTotalAmount(cartSnap.data().cartTotalAmount)
    );
  } else {
    return dispatch(clearCart());
  }
};

/**
 *
 * @param {object} user user object of the auth reducer
 * @param {number} cartTotalAmount subtotal of prices in the cart
 * @param {object[]} cart
 * @returns setDoc()
 *
 * Function to set doc to the Firebase collection [user.uid] with the name [cart-user.uid],
 * it checks first if the user is logged in and is verified then get the current doc if exists,
 * then set doc back to allow user to use his account with same cart content from more than one browser,
 * this function is running when any change happens in the cartTotalAmount state.
 */

export const setDocCartToFirebase = async ({ user, cartTotalAmount, cart }) => {
  if (user?.isVerified) {
    const cartRef = doc(db, user.uid, `cart-${user.uid}`);
    await getDoc(cartRef);
    return setDoc(cartRef, {
      cartTotalAmount,
      cart,
      timestamp: serverTimestamp()
    });
  } else if (user === null) {
    console.log("Please login!");
    return;
  } else if (!user.isVerified) {
    console.log(user.name, "- Please verify your account:", user.email);
    return;
  }
};
