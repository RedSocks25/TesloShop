import type { NextApiRequest, NextApiResponse } from 'next';

import { db, seedDatabase } from '../../database';
import { Product } from '../../models';
import { HTTP_CODES } from '../../utils';


type Data = {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  // Deny access if the API call to this endpoint comes from production
  if (process.env.NODE_ENV === 'production') {
    return res.status(HTTP_CODES.UNAUTHORIZED).json({
      message: 'Unauthorized to access this API endpoint',
    });
  }

  // Connection to DB and delete all the items related to products
  await db.connect();
  await Product.deleteMany();

  // Insert all the seed data
  await Product.insertMany(seedDatabase.initialData.products);

  // Cut the connection with DB
  await db.disconnect();

  return res.status(HTTP_CODES.CREATED).json({
    message: 'Process successfully completed. Database seeded'
  });
}