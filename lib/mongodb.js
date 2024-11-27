import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // URL de conexão do MongoDB, incluindo o nome do banco
const options = {
  useNewUrlParser: true,  // Para garantir que o MongoDB usa o parser de URL moderno
  useUnifiedTopology: true,  // Para garantir que o MongoDB use o driver moderno de topologia
  ssl: true,  // Forçar a utilização de SSL para segurança
  // Se precisar de mais opções, como timeout, pode adicionar aqui
};

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
