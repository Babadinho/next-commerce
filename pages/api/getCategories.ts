// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';

const fetchCategories = groq`*[_type == 'category'] {
  _id,
    ...
} | order(_createdAt desc)`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(fetchCategories);
  res.status(200).json({ categories });
}
