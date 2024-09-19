export async function cadastrarUsuario(dadosDoUsuario){
    //crio uma variavel que recebe os dados da api
    const response = await fetch("https://27bc352d-8ef8-4b52-976f-c6126bf6661d-00-28ordud37745w.riker.replit.dev/register",{
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
