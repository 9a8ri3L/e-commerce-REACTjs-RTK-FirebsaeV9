import { useDispatch, useSelector } from "react-redux";
import { CartSummary, SortProducts } from "..";
import { filterProducts } from "../../features/products/productSlice";
import {
  All,
  Breadcrumbs,
  DashNav,
  DashNavContainer,
  Filter,
} from "../../pages/dashboard/Dashboard.styled";

const DashInfoBar = ({ breadcrumb, sort, setSort }) => {
  const { filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <DashNav>
      <DashNavContainer>
        <Breadcrumbs>
          {filter === "?limit=8&skip=9" ? (
            <All>New Arrivals {">"}</All>
          ) : (
            <All onClick={() => dispatch(filterProducts("?limit=100&skip=0"))}>
              All Products {">"}
            </All>
          )}
          <Filter> {breadcrumb}</Filter>
        </Breadcrumbs>
        <SortProducts sort={sort} setSort={setSort} />
        <CartSummary />
      </DashNavContainer>
    </DashNav>
  );
};
export default DashInfoBar;
