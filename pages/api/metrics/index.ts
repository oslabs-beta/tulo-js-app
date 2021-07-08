// Next.js API route docs: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API middleware docs: https://nextjs.org/docs/api-routes/api-middlewares
import Cors from 'cors';
import runMiddleware from '../../../utils/middleware';
import { dbConnectNew } from '../../../utils/dbConnect';
import Metric from '../../../models/Metric';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
});

export default async function postMetricsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // run cors middleware
  await runMiddleware(req, res, cors);
  // connect to database
  await dbConnectNew();

  if (req.method === 'POST') {
    const origin = req.headers.origin;
    const { resource, strategy, action, timestamp } = req.body;

    try {
      // find document for resource in metrics collection
      let resourceDoc;
      resourceDoc = await Metric.findOne({
        origin,
        resource,
      }).exec();

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

      return res
        .status(200)
        .send('Metrics successfully sent to tulojs.com API endpoint.');
    } catch (error) {
      // TODO: error handling
      console.error({ error });
      return res
        .status(500)
        .send('Error sending metrics to tulojs.com API endpoint.');
    }
  }
}
