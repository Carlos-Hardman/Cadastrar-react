import clientPromise from "@/lib/mongodb"; // Ajuste o caminho conforme necessário
import { ObjectId } from "mongodb"; // Importar ObjectId para trabalhar com IDs

export const getUsuarios = async () => {
    const client = await clientPromise;
    const db = client.db("BancodoCarlos"); // Substitua pelo nome do seu banco de dados
    const usuarios = await db.collection("usuarios").find({}).toArray(); // Substitua "usuarios" pelo nome da sua coleção
    return usuarios.map(usuario => ({ id: usuario._id.toString(), email: usuario.email })); // Formate os dados conforme necessário
};

export const deleteUsuario = async (id) => {
    const client = await clientPromise;
    const db = client.db("BancodoCarlos"); // Certifique-se de usar o mesmo nome do banco de dados
    await db.collection("usuarios").deleteOne({ _id: new ObjectId(id) }); // Deleta o usuário pelo ID
};
