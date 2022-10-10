import { disCalc, origPrice } from "../../helpers/calcsFunctions";
import { handleSort } from "../../helpers/dashNavFunctions";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";
import {
  CardAddedInfo,
  CardBG,
  CardBody,
  CardBodyTop,
  CardBtn,
  CardBtns,
  CardBtnsAfterBuy,
  CardCalcs,
  CardDesc,
  CardHeader,
  CardImg,
  CardPrice,
  CardTotalInfo,
  CardWrapper,
  DashContainer,
  Discount,
  Oprice,
  Price,
  Title,
  TotalPrice,
  TotalSavings
} from "../../pages/dashboard/Dashboard.styled";
import { FaCartArrowDown } from "@react-icons/all-files/fa/FaCartArrowDown";

const Card = ({ sortedProducts, sort, removeItem, addItem }) => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <DashContainer>
      {sortedProducts &&
        handleSort(sort, sortedProducts).map(product => {
          const op = origPrice(product.price, product.discountPercentage);
          return (
            <CardWrapper key={uuidv4()}>
              <CardHeader>
                <CardImg
                  src={product.thumbnail}
                  loading="eager"
                  alt={product.brand}
                />
              </CardHeader>
              <CardBody>
                <CardBodyTop>
                  <span>{product.brand}</span>
                  <Title>
                    <p>{product.title}</p>
                  </Title>
                  <CardPrice>
                    <Price>${product.price.toFixed(2)}</Price>
                    <span>/</span>
                    <Oprice>${op}</Oprice>
                    <Discount>-{product.discountPercentage}%</Discount>
                  </CardPrice>
                </CardBodyTop>
                <CardDesc>
                  <p>{product.description}</p>
                </CardDesc>
                <CardBtns>
                  {cart && cart.some(item => item.id === product.id) ? (
                    <CardAddedInfo key={uuidv4()}>
                      <CardBtnsAfterBuy>
                        <CardBtn onClick={() => removeItem(product)}>
                          Remove
                        </CardBtn>
                        <CardBtn
                          onClick={() => {
                            addItem(product);
                          }}
                        >
                          Add more <FaCartArrowDown />
                        </CardBtn>
                        <CardBtn onClick={() => dispatch(toggleCart())}>
                          View Cart
                        </CardBtn>
                      </CardBtnsAfterBuy>
                      <CardCalcs>
                        <span>Added to cart</span>
                        {cart.map(item => {
                          const SavingCalc = disCalc(
                            item.price,
                            item.discountPercentage,
                            item.itemQty
                          );
                          if (item.id === product.id) {
                            return (
                              <div key={uuidv4()}>
                                {item.itemQty === 1 ? (
                                  <b key={uuidv4()}> 1 item</b>
                                ) : (
                                  <b key={uuidv4()}> {item.itemQty} items</b>
                                )}
                                <CardTotalInfo key={uuidv4()}>
                                  <CardBG></CardBG>
                                  <TotalPrice>
                                    <b style={{ textAlign: "left" }}>
                                      Total price: $
                                      {(product.price * item.itemQty).toFixed(
                                        2
                                      )}
                                    </b>
                                  </TotalPrice>
                                  <TotalSavings>
                                    <p>You saved: ${SavingCalc}</p>
                                  </TotalSavings>
                                </CardTotalInfo>
                              </div>
                            );
                          }
                        })}
                      </CardCalcs>
                    </CardAddedInfo>
                  ) : (
                    <CardBtn
                      onClick={() => {
                        addItem(product);
                      }}
                      rounded
                    >
                      BUY NOW {"  "}
                      <FaCartArrowDown size={15} />
                    </CardBtn>
                  )}
                </CardBtns>
              </CardBody>
            </CardWrapper>
          );
        })}
    </DashContainer>
  );
};
export default Card;
