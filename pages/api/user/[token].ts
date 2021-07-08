import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnectLegacy } from '../../../utils/dbConnect';

export default async function fetchUserIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if token is an array, save the first element (to satisfy accessToken type checking in find query below)
  let token = req.query.token;
  if (Array.isArray(token)) token = token[0];

  // connect to the database
  const db = await dbConnectLegacy();

  // if the request is a GET request, send back the session document of the current user
  if (req.method === 'GET') {
    try {
      // access sessions collection from the database
      const sessionsCollection = await db.collection('sessions');
      // query sessions collection for document matching user access token
      const session = await sessionsCollection.findOne({
        accessToken: token,
      });

      // access users collection from the database and find signed in user
      const usersCollection = await db.collection('users');
      const user = await usersCollection.findOne({
        _id: session.userId,
      });

      // send the session associated with the user back to the client-side
      return res.status(200).json(user);
    } catch (error) {
      // TODO: add more robust error-handling
      console.log({ error });
      return res.status(500).send('Error retrieving user session information.');
    }
  } else {
    return res.status(500).send('fetch request to api/:token not handled');
  }
}
