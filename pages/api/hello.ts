// Next.js API route docs: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API middleware docs: https://nextjs.org/docs/api-routes/api-middlewares
import Cors from 'cors';
import runMiddleware from '../../utils/middleware';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET'],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log({ headers: req.headers, body: req.body });

  // run cors middleware
  await runMiddleware(req, res, cors);

  res.status(200).json({ hello: 'hello sent from /api/hello' });
}
