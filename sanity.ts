import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not defined');
}

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  projectId: projectId,
  apiVersion: '2021-08-11', // or today's date for latest,
  useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
