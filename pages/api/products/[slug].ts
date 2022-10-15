import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';
import { HTTP_CODES } from '../../../utils';


type Data = 
| { message: string }
| IProduct;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // Get method called for this API endpoint
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res);
  
    default:
      return res.status(HTTP_CODES.BAD_REQUEST).json({
        message: `Bad request. Method ${ req.method } not available for this endpoint`,
      });
  }
}

const getProductBySlug = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  // Slug comes as param in the request route
  const { slug } = req.query;

  // Connect to DB and find only one item that has the slug received
  await db.connect();
  const productBySlug = await Product.findOne({ slug }).lean();
  await db.disconnect();

  // Check if the DB found a coincidence
  if (!productBySlug)
    return res.status(HTTP_CODES.NOT_FOUND).json({ message: `Product with slug ${ slug } not found` });
  
  return res.status(HTTP_CODES.OK).json(productBySlug);
}
