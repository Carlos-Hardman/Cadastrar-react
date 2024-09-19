export default function Form({email, setEmail, password, setPassword, handleSubmit,erro}){
return(
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
           
        <input 
            type="password" 
            placeholder="Digite seu senha"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
          />
          {erro && <p>{erro}</p>}
          <button type="submit">enviar</button>

    </form>
);
}