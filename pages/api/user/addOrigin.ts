import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import mongoose from 'mongoose';

export default async function addOriginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // connect to the database
  const db = await dbConnect();

  // if the request is a POST request, add the origin to the user document in the database
  if (req.method === 'POST') {
    try {
      // access users collection from the database
      const usersCollection = await db.collection('users');

      // retrieve user from database and save existing origins, if set
      const _id = mongoose.Types.ObjectId(req.body._id);
      const user = await usersCollection.findOne({ _id: _id });
      const origins = user.authorized_origins ? user.authorized_origins : [];

      // add origin from POST request to saved origin array
      origins.push(req.body.origin);

      // update user document to reflect added origin
      await usersCollection.findOneAndUpdate(
        { _id: _id },
        { $set: { authorized_origins: origins } }
      );
      const updatedUser = await usersCollection.findOne({ _id: _id });

      // send updated user doc to client-side
      return res.status(200).json(updatedUser);
    } catch (error) {
      // TODO: add more robust error-handling
      console.log({ error });
      return res.status(500).send('Error saving origin to the database.');
    }
  } else {
    return res
      .status(500)
      .send('fetch request to api/user/addOrigin not handled');
  }
}
