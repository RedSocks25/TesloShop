import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';
import { http } from '../../../utils';

type Data = 
| { message: string }
| IProduct[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // Get method called for this API endpoint
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    
    default:
      return res.status(http.BAD_REQUEST).json({
        message: 'Bad request',
      });
  }
  
  return res.status(200).json({ message: 'Example' });
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  // Connect to DB and find products with the less data possible
  await db.connect();
  const products = await Product.find()
    .select('title images price inStock slug -_id')
    .lean();

  // Disconnect after query
  await db.disconnect();

  return res.status(http.OK).json(products);
}
