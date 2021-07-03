// Next.js API route docs: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API middleware docs: https://nextjs.org/docs/api-routes/api-middlewares
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  middlewareFunc: Function
) {
  return new Promise((resolve, reject) => {
    middlewareFunc(req, res, (result: void | Error) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log({ headers: req.headers });

  // run cors middleware
  await runMiddleware(req, res, cors);

  res.status(200).json({ hello: 'hello sent from /api/hello' });
}
