import { useState, useEffect } from "react";
import { consultarUsuarios } from "@/service/cadastroService";

export function useConsultaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);

    const fetchUsuarios = async () => {
        try {
            const dados = await consultarUsuarios();
            setUsuarios(dados);
            setErro(null); // Resetando erro se a busca foi bem-sucedida
        } catch (erro) {
            setErro(erro);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    return { usuarios, erro, refetch: fetchUsuarios }; // Adicionando a função refetch
}
