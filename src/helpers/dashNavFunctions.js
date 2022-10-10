/**
 * It sorts the products based on the sort value passed to it
 * @param sort - The value of the sort dropdown
 * @param sortedProducts - The products that have been filtered by the user's search query.
 * @returns the sortedProducts array.
 */
export const handleSort = (sort, sortedProducts) => {
  if (sort === "htol") {
    return sortedProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
  } else if (sort === "ltoh") {
    return sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sort === "select") {
    return sortedProducts;
  } else if (sort === "hdtol") {
    return sortedProducts.sort((a, b) =>
      a.discountPercentage > b.discountPercentage ? -1 : 1
    );
  } else if (sort === "ldtoh") {
    return sortedProducts.sort((a, b) =>
      a.discountPercentage > b.discountPercentage ? 1 : -1
    );
  } else if (sort === "a-z") {
    return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "z-a") {
    return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }
  return sortedProducts;
};

/**
 * It takes in a filter and a setBreadcrumb function as arguments, and then sets the breadcrumb to the
 * appropriate value based on the filter
 * @param filter - The filter parameter is the filter that is passed to the API.
 * @param setBreadcrumb - This is the state setter of the state that we want to change.
 */
export const handleBreadcrumb = (filter, setBreadcrumb) => {
  if (filter === "?limit=100&skip=0") {
    setBreadcrumb("");
  } else if (filter === "?limit=8&skip=9") {
    setBreadcrumb("");
  } else if (filter === "category/smartphones") {
    setBreadcrumb("Smartphones");
  } else if (filter === "category/laptops") {
    setBreadcrumb("Laptops");
  } else if (filter === "category/fragrances") {
    setBreadcrumb("Fragrances");
  } else if (filter === "category/skincare") {
    setBreadcrumb("Skin Care");
  } else if (filter === "category/home-decoration") {
    setBreadcrumb("Home Decoration");
  } else if (filter === "category/furniture") {
    setBreadcrumb("Furniture");
  } else if (filter === "category/tops") {
    setBreadcrumb("Clothes / Tops");
  } else if (filter === "category/womens-dresses") {
    setBreadcrumb("Women / Dresses");
  } else if (filter === "category/womens-shoes") {
    setBreadcrumb("Women / Shoes");
  } else if (filter === "category/womens-watches") {
    setBreadcrumb("Women / Watches");
  } else if (filter === "category/womens-bags") {
    setBreadcrumb("Women / Bags");
  } else if (filter === "category/womens-jewellery") {
    setBreadcrumb("Women / Jewellery");
  } else if (filter === "category/mens-shirts") {
    setBreadcrumb("Men / Shirts");
  } else if (filter === "category/mens-shoes") {
    setBreadcrumb("Men / Shoes");
  } else if (filter === "category/mens-watches") {
    setBreadcrumb("Men / Watches");
  } else if (filter === "category/sunglasses") {
    setBreadcrumb("Accessories / Sunglasses");
  } else if (filter === "category/automotive") {
    setBreadcrumb("Automotive");
  } else if (filter === "category/motorcycle") {
    setBreadcrumb("Motorcycle");
  } else if (filter === "category/lighting") {
    setBreadcrumb("Lighting");
  } else if (filter === "category/groceries") {
    setBreadcrumb("Groceries");
  }
};
