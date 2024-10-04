// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Use variáveis de ambiente para não expor suas credenciais
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Em desenvolvimento, use uma instância do MongoClient
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, conecte diretamente
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
