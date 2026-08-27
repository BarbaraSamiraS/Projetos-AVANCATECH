// Criar um componente padrão importar o UseState e o useRef
//Criar as variaveis de REF (utilizados para pegar o valor da tag)

// EXTRA: Crie a estrutura HTML, div, h1(lista de usuarios), 2 inputs e um botão

"use client"

import {useState , useRef } from "react"

export default function ListaObjetosState(){
    const [lista, setLista] = useState([])
    const valueEmail = useRef(null)
    const valueNome = useRef(null)

    function registrar(){
        const email = valueEmail.current.value
        const nome = valueNome.current.value
        setLista([...lista, {nome,email}])
    }

    return(
        <>
            <div>
                <h1>Lista de Usúarios</h1>
                <input type="text" placeholder="Digite seu EMAIL: " ref={valueEmail}></input>
                <input type="text" placeholder="Digite seu NOME: " ref={valueNome}></input>
                <button onClick={registrar}>Registrar</button>

                <div>
                    {lista.map((pessoa)=>{
                        return <li key={pessoa.nome}>
                            <h1>Nome: {pessoa.nome}</h1>
                            <h2>Email: {pessoa.email}</h2>
                        </li>
                    })}
                </div>
            </div>
        </>
    )
}
