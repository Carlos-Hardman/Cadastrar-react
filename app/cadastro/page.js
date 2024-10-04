// app/cadastro/page.js
"use client";

import Form from "@/component/form";
import { useCadastro } from "@/hooks/useCadastro";

export default function Cadastro() {
    const { email, setEmail, password, setPassword, erro, handleSubmit } = useCadastro();

    return (
        <div>
            <h2>Cadastro</h2>
            {erro && <p style={{ color: 'red' }}>{erro.message || String(erro)}</p>}
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
