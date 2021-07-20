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
    const metricsQueue = req.body;
    try {
      // find document for resource in metrics collection
      console.log('Received metricsQueue', metricsQueue);
      for (const metrics of metricsQueue) {
        const { url, message, strategy, size, loadtime, connection, device, timestamp } = metrics;
        let resourceDoc = await Metric.create({
          origin,
          url,
          message,
          strategy,
          size,
          loadtime,
          connection,
          device,
          timestamp,
        });

        await resourceDoc.save();
      }

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
  } else if(req.method === 'OPTIONS'){
    return res.status(200).end();
  }
}
