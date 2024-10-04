export async function cadastrarUsuario(dadosDoUsuario){
    //crio uma variavel que recebe os dados da api
    const response = await fetch("http://localhost:3000/api/cadastro",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosDoUsuario)
    });
    //verifico se ta tudo certo
    if(!response.ok){
        console.log("erro");
    }
    //se sim retorne os dadps no formato json
    return response.json();
}
