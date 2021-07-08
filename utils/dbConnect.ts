import mongoose from 'mongoose';

type MongoConnectionString = string;

const MONGO_URI: MongoConnectionString = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  throw new Error(
    'MONGODB_URI environment variable must be defined inside .env.local'
  );
}

async function dbConnectLegacy() {
  if (mongoose.connection.readyState >= 1) {
    // if connection is open return the instance of the database
    return mongoose.connection.db;
  }

  let dbConnection;

  dbConnection = await mongoose.createConnection(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB database.');

  return dbConnection;
}

// TODO: refactor to one catch all connect function
async function dbConnectNew() {
  if (mongoose.connection.readyState >= 1) {
    // if connection is open return the instance of the database
    return mongoose.connection.db;
  }

  let dbConnection;

  dbConnection = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB database.');

  return dbConnection;
}

export { dbConnectLegacy, dbConnectNew };
