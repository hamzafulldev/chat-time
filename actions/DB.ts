import { MongoClient } from 'mongodb';

let client;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let clientPromise:any;

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
