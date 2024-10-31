import React, { useState } from "react";
import '../app/css/pesquisa.css';
import { useConsultaUsuarios } from "@/hooks/useConsultaUsuarios";

const ListaUsuarios = () => {
    const { usuarios, erro, refetch } = useConsultaUsuarios();
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 9;

    const handleDelete = async (id) => {
        const confirmDelete = confirm("Você tem certeza que deseja deletar este usuário?");
        if (confirmDelete) {
            try {
                const response = await fetch(`/api/usuarios?id=${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Erro ao deletar o usuário');
                }
                refetch(); // Refaz a consulta para atualizar a lista de usuários
            } catch (error) {
                alert(error.message);
            }
        }
    };

    if (erro) {
        return <div style={{ color: 'red' }}>Erro: {erro.message}</div>;
    }

    // Calcular os usuários a serem exibidos
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usuarios.slice(indexOfFirstUser, indexOfLastUser);

    // Calcular o número de páginas
    const totalPages = Math.ceil(usuarios.length / usersPerPage);

    return (
        <div>
            <ul>
                {currentUsers.length > 0 ? (
                    currentUsers.map((usuario) => (
                        <li
                            className="listausuario"
                            key={usuario.id}
                            onClick={() => handleDelete(usuario.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {usuario.email}
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5510/5510213.png"
                                width="19"
                                alt="lixeira"
                                style={{ marginLeft: '10px' }}
                            />
                        </li>
                    ))
                ) : (
                    <li>Nenhum usuário cadastrado.</li>
                )}
            </ul>
            <div>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default ListaUsuarios;
