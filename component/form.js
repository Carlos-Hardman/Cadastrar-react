import React, { useState } from 'react';


export default function Form({ email, setEmail, password, setPassword, handleSubmit, erro }) {
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

    const togglePasswordVisibility = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão
        setShowPassword(prev => !prev); // Alterna a visibilidade
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="nomeform">Cadastros</h2>
            <label htmlFor="Email">Email:</label>
            <input 
                type="email" 
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <label htmlFor="Senha">Senha:</label>
            <input 
                type={showPassword ? "text" : "password"} // Alterna entre texto e senha
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
            <button id="versenha" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁"} {/* Troca o ícone com base na visibilidade */}
            </button>
            {erro && <p>{erro}</p>}
            <button type="submit">Cadastrar</button>
        </form>
    );
}
