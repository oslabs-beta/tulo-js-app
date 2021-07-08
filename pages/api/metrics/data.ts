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

export default async function fetchMetricsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // run cors middleware
  await runMiddleware(req, res, cors);
  // connect to database
  await dbConnectNew();

  if (req.method === 'POST') {
    try {
      const metricDocs = await Metric.find({ origin: req.body.origin });
      return res.status(200).json(metricDocs);
    } catch (error) {
      // TODO: error handling
      console.error({ error });
      return res
        .status(500)
        .send('Error fetching metrics from api/metrics/data.');
    }
  }
}
