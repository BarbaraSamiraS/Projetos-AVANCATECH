"use client"

import { useState , useRef } from "react"

export default function ListaState(){
    // Sintaxe padrão de uma lista
    // const lista = []

    // Lista com State

    const [lista, setLista] = useState([])

    //Use ref é um recurso utilizado para pegar valores da TAG html.
    const inputRef = useRef(null)
    function adicionar(){
        const valorDigitado = inputRef.current.value
        setLista([...lista, valorDigitado])
    }

    return(
        <>
            <div>
                <h1>Lista Simples com State</h1>

                <input type="text" placeholder="Digite aqui sua tarefa do dia" ref={inputRef}></input>
                <button onClick={adicionar}>Enviar</button>
            </div>
            {lista.map( (item,indice)=>{
                return <h3 key={indice}>{item}</h3>
            })}
        </>
    )
}