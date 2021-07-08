// Next.js API route docs: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API middleware docs: https://nextjs.org/docs/api-routes/api-middlewares
import Cors from 'cors';
import runMiddleware from '../../../utils/middleware';
import { dbConnectNew } from '../../../utils/dbConnect';
import Metric from '../../../models/Metric';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log({ origin: req.headers.origin, body: req.body });
  const origin = req.headers.origin;
  const { resource, strategy, action, timestamp } = req.body;

  // run cors middleware
  await runMiddleware(req, res, cors);

  // connect to database
  await dbConnectNew();

  try {
    // find document for resource in metrics collection
    let resourceDoc;
    console.log('1', { resourceDoc });
    resourceDoc = await Metric.findOne({
      origin,
      resource,
    }).exec();
    console.log('2', { resourceDoc });

    // create metric document for resource if it doesn't exist
    if (!resourceDoc) {
      resourceDoc = await Metric.create({
        origin,
        resource,
        strategy,
        actions: [],
      });
    }

    // POST action from client app to resource document
    resourceDoc.actions.push({
      action,
      timestamp,
    });

    await resourceDoc.save();
  } catch (error) {
    // TODO: error handling
    console.error({ error });
  }

  res.status(200).json({ hello: 'hello sent from /api/hello' });
}
