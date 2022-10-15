import type { NextApiRequest, NextApiResponse } from 'next';

import { db, SHOP_CONSTANTS } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';
import { HTTP_CODES } from '../../../utils';


type Data = 
| { message: string }
| IProduct[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // Get method called for this API endpoint
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    
    default:
      return res.status(HTTP_CODES.BAD_REQUEST).json({
        message: 'Bad request',
      });
  }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  // default query is looking for all products, unless you are sending a param with ?gender=<gender>
  const { gender = 'all' } = req.query;
  
  // Condition to validate query param entry. If gender is not included in SHOP_CONSTAT genders, then is going to ignore it and return all
  let condition = {};
  if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${ gender }`)) {
    condition = { gender };
  }

  // Connect to DB and find products with the less data possible
  await db.connect();

  const products = await Product.find(condition)
    .select('title images price inStock slug -_id')
    .lean();

  // Disconnect after query
  await db.disconnect();

  return res.status(HTTP_CODES.OK).json(products);
}
