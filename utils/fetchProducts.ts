import axios from 'axios';

export const fetchProducts = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );

  const products: Product[] = res.data.products;

  return products;
};
