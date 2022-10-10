import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Cart, Spinner } from "../../components";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { getAllProducts } from "../../features/products/productSlice";

import { StyledDashboard } from "./Dashboard.styled";
import useTitle from "../../helpers/useTitle";
import { handleBreadcrumb, handleSort } from "../../helpers/dashNavFunctions";

const Dashboard = ({ sortedProducts, sort, breadcrumb, setBreadcrumb }) => {
  const dispatch = useDispatch();
  const { isLoading, filter } = useSelector(state => state.products);
  const { showCart } = useSelector(state => state.cart);

  isLoading
    ? useTitle("ONLINEstore | Loading...")
    : useTitle("ONLINEstore | Dashboard");

  /* The useEffect Hook that is used to set the breadcrumb based on the filter value. */
  useEffect(() => {
    handleBreadcrumb(filter, setBreadcrumb);
    return () => handleBreadcrumb(filter, setBreadcrumb);
  }, [filter, breadcrumb]);

  /* * Based on sort value, scroll to up and get the sorted products. * */
  useEffect(() => {
    window.scrollTo(0, -100);
    handleSort(sort, sortedProducts);
  }, [sort]);

  /* Based on filter value, scroll to up and get the filtered/sorted products. */
  useEffect(() => {
    window.scrollTo(0, -100);
    dispatch(getAllProducts(filter));
  }, [filter]);

  /**
   * @function that takes a product as an argument and dispatches an action to add that
   * product to the cart.
   * @param {object} product an item of the fetched products array
   */
  const addItem = product => {
    dispatch(addToCart(product));
  };

  /**
   * @function takes a product as an argument and then dispatches the removeFromCart action with the
   * product as an argument, if the product id matches the cart item id, then the cart item will be removed.
   * @param {object} product an item of the fetched products array
   */
  const removeItem = async product => {
    dispatch(removeFromCart(product));
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (showCart) {
    return <Cart />;
  }

  return (
    <StyledDashboard>
      <Card
        sortedProducts={sortedProducts}
        sort={sort}
        removeItem={removeItem}
        addItem={addItem}
      />
    </StyledDashboard>
  );
};
export default Dashboard;
