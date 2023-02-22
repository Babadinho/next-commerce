import axios from 'axios';

export const getCategories = async () =>
  await axios.get(`${process.env.NEXT_PUBIC_BASE_URL}/categories`);
