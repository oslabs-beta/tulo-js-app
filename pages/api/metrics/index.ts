// Next.js API route docs: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API middleware docs: https://nextjs.org/docs/api-routes/api-middlewares
// import Cors from 'cors';
// import runMiddleware from '../../../utils/middleware';
import { dbConnectNew } from '../../../utils/dbConnect';
import Metric from '../../../models/Metric';

// Initializing the cors middleware
// const cors = Cors({
//   methods: ['POST', 'OPTIONS'],
// });

const allowCors =
  (fn: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    if (req.method === 'OPTIONS') {
      console.log('OPTIONS clause executing...');
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };

async function postMetricsHandler(req: NextApiRequest, res: NextApiResponse) {
  // run cors middleware
  // await runMiddleware(req, res, cors);
  // connect to database
  await dbConnectNew();

  if (req.method === 'POST') {
    const origin = req.headers.origin;
    const metricsQueue = req.body;
    try {
      // find document for resource in metrics collection
      console.log('Received metricsQueue', metricsQueue);
      for (const metrics of metricsQueue) {
        const {
          url,
          message,
          strategy,
          size,
          loadtime,
          connection,
          device,
          timestamp,
        } = metrics;

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
      console.error({ error });
      return res
        .status(500)
        .send('Error sending metrics to tulojs.com API endpoint.');
    }
  }
}

module.exports = allowCors(postMetricsHandler);
