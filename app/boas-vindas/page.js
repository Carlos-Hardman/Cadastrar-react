import '../css/boasvindas.css';

export default function BoasVindas(){
    
    return(
        <>
        <div className="listagens">
            <h1 className='tituloprincipal'>Boas Vindas a Listagens de Usuarios Cadastrados</h1>
            <a  className="linklistausuarios" href="/usuarios">Ver usuários cadastrados</a>
            <a href="http://localhost:3000/cadastro" className="botaovoltar">Voltar</a>

        </div>
        


        </>
    );
}