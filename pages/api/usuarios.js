import { getUsuarios, deleteUsuario } from "@/service/usuarioService"; 

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const usuarios = await getUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            res.status(500).json({ message: "Erro ao buscar usuários" });
        }
    } else if (req.method === 'DELETE') {
        const { id } = req.query; // ID do usuário a ser deletado

        try {
            await deleteUsuario(id); // Chama a função para deletar o usuário
            res.status(200).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            res.status(500).json({ message: "Erro ao deletar usuário" });
        }
    } else {
        res.setHeader('Allow', ['GET', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
