import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';

export default async function fetchUserIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if token is an array, save the first element (to satisfy accessToken type checking in find query below)
  let token = req.query.token;
  if (Array.isArray(token)) token = token[0];

  // connect to the database
  const db = await dbConnect();

  // if the request is a GET request, send back the user id
  if (req.method === 'GET') {
    try {
      db.collection('sessions', async (err, sessionsCollection) => {
        if (err) console.log(err);
        const session = await sessionsCollection.findOne({
          accessToken: token,
        });
        return res.status(200).json(session);
      });
    } catch (e) {
      // TODO: add more robust error-handling
      console.log(e);
      return res.status(500).send('Error retrieving user session information.');
    }
  } else {
    return res.status(500).send('fetch request to api/:token not handled');
  }
}
