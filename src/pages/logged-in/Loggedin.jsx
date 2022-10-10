import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Flex, space } from "../../config/variables";
import { SideBarCom } from "../../components";
import { filterProducts } from "../../features/products/productSlice";
import { Dashboard } from "../";
import media from "styled-media-query";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DashInfoBar from "../../components/dashboardInfoBar/DashInfoBar";

const Loggedin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { user } = useSelector(state => state.auth);
  const [sort, setSort] = useState("");
  const [breadcrumb, setBreadcrumb] = useState("");

  const dashRef = useRef();
  const sortedProducts = (user && [...products]) || [];

  useEffect(() => {
    const scrollDashboard = async () => {
      if (window.innerWidth < 1170) {
        await dashRef.current.scrollIntoView();
      }
    };
    scrollDashboard();

    return () => scrollDashboard();
  }, [sortedProducts]);

  return (
    <Main>
      <LeftSide>
        <SideBarCom dispatch={dispatch} filterProducts={filterProducts} />
      </LeftSide>
      <RightSide ref={dashRef}>
        <DashInfoBar breadcrumb={breadcrumb} sort={sort} setSort={setSort} />

        <Dashboard
          sortedProducts={sortedProducts}
          sort={sort}
          setSort={setSort}
          breadcrumb={breadcrumb}
          setBreadcrumb={setBreadcrumb}
        />
      </RightSide>
    </Main>
  );
};
export default Loggedin;

const Main = styled.main`
  min-height: calc(100vh - ${space.headerHeight});
  display: flex;
  width: 100%;
  ${media.lessThan("large")`
flex-direction: column;
margin: 0 auto;
gap: 20em;
`}
`;

const LeftSide = styled.section`
  position: sticky;
  left: 0;
  top: 0;
  align-self: start;
  ${Flex.flexRow}
  flex: 0.25;
  min-height: 100vh;
`;

const RightSide = styled.section`
  flex: 1;
  ${Flex.flexCol}
  position: relative;
  padding: 0 ${space.lgSpacing};
  width: 100%;
`;
