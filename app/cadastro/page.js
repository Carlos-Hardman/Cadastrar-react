"use client"

import Form from "@/component/form";
import { useCadastro } from "@/hooks/useCadastro";


export default function Cadastro() {
    const { email, setEmail, password, setPassword, erro, handleSubmit } = useCadastro();
    return (
        <div>
            <h2>Cadastro</h2>
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                erro={erro}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}