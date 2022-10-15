import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_CODES } from '../../../utils/constants';


type Data = {
  message: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(HTTP_CODES.BAD_REQUEST).json({ message: 'Need to specify the search query' });
}