const productArr = () =>
  Array(100)
    .fill()
    .map((_, idx) => `Product ${idx + 1}`);

export const products = productArr();