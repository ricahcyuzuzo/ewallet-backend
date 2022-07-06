export const createProduct = req => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  }

  return product;
}
