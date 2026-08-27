"use client";
import { useState, useRef } from "react";
export default function CadastroLogin() {
    // TODO 1: crie aqui o state da lista de usuários cadastrados
    // (deve começar como um array vazio)
    const [lista, setLista] = useState([])

    // TODO 2: crie as refs dos inputs de e-mail e senha
    const emailRef = useRef(null)
    const senhaRef = useRef(null)

    // TODO 3: implemente a função que adiciona um novo usuário à lista
    function adicionarUsuario(){
        if(emailRef.current.value.trim() === "" || senhaRef.current.value.trim() === ""){
            email = emailRef.current.value
            senha = senhaRef.current.value
            setLista([...lista, {email,senha}])
        } else{
            console.log("Os campus EMAIL ou SENHA não podem ficar vazios")
        }
    }

    return (
        <div style={{ padding: 24, fontFamily: "sans-serif" }}>
            <h2>Cadastro de Login</h2>
            <input ref={emailRef} type="email" placeholder="E-mail" style={{ display: "block", marginBottom: 8, padding: 8 }}/>
            <input ref={senhaRef} type="password" placeholder="Senha" style={{ display: "block", marginBottom: 8, padding: 8 }}/>
            <button onClick={adicionarUsuario}>Cadastrar</button>
            <h3>Usuários cadastrados:</h3>
            <ul>
                {lista.map((usuario) => (
                    <li key={usuario}>
                        {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}