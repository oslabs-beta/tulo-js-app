import mongoose from 'mongoose';

type MongoConnectionString = string;

const MONGO_URI: MongoConnectionString = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  throw new Error(
    'MONGODB_URI environment variable must be defined inside .env.local'
  );
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    // if connection is open return the instance of the database
    return mongoose.connection.db;
  }

  const dbConnection = await mongoose.createConnection(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return dbConnection;
}

export default dbConnect;
