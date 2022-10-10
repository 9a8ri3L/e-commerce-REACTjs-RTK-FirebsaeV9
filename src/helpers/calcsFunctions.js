/**
 * @param p - price
 * @param dis - discount percentage
 * @param qty - quantity of the item
 * @returns The amount saved by the discount.
 *
 * It takes the price, discount, and quantity of an item and returns the amount saved
 */

export const disCalc = (p, dis, qty) => {
  const discount = dis / 100;
  const op = p / (1 - discount);
  const saved = (op - p) * qty;
  return saved.toFixed(2);
};

/**
 * @param p - price
 * @param dis - discount percentage
 * @returns The original price of an item.
 *
 * Given a price and a discount percentage, return the original price.
 */
export const origPrice = (p, dis) => {
  const discount = dis / 100;
  const op = p / (1 - discount);
  return op.toFixed(2);
};
