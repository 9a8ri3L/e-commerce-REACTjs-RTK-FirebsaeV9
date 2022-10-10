import { SProducts, Select, SortOptGroup } from "./SortProducts.styled";

const SortProducts = ({ sort, setSort }) => {

  return (
    <SProducts>
      <span>Sort by</span>
      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="select">
          Default...
        </option>
        <SortOptGroup label="--- By Price ---">
          <option value="ltoh">- Low to high</option>
          <option value="htol">- High to low</option>
        </SortOptGroup>
        <SortOptGroup label="--- By Discount ---">
          <option value="hdtol">- High to low</option>
          <option value="ldtoh">- Low to high</option>
        </SortOptGroup>
        <SortOptGroup label="--- By Alphabet ---">
          <option value="a-z">- From A-Z</option>
          <option value="z-a">- From Z-A</option>
        </SortOptGroup>
      </Select>
    </SProducts>
  );
};
export default SortProducts;
