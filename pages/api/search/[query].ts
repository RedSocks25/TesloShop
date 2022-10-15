import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_CODES } from '../../../utils';
import { db } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';


type Data =
| { message: string }
| IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  switch (req.method) {
    case 'GET':
      return searchProducts(req, res);

    default:
      return res.status(HTTP_CODES.BAD_REQUEST).json({
        message: `Bad request. Method ${ req.method } not available for this endpoint`,
      });
  }
}

const searchProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  // Get query from API request params
  let { query = '' } = req.query;

  // Check if the user sent something within the search input
  if (query.length === 0) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      message: 'You have to specify the item in the search query,'
    });
  }

  // Lowercase since everything in the DB that can make a coincidence with the query is in lowercase
  query = query.toString().toLowerCase();

  // Search in the DB the query throught all the Produc Fields that have the 'text' type index in the model definition
  await db.connect();
  const foundProducts = await Product.find({
    $text: { $search: query },
  })
    .select('title images price inStock slug -_id')
    .lean();
    
  await db.disconnect();

  return res.status(HTTP_CODES.OK).json(foundProducts);
}
