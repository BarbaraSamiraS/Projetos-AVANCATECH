"use client"
import { useState} from "react"

export default function Contador() {
    const [contador,setContador] = useState(0)

    const [texto,setTexto] =useState("")

    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador - 1)
    }
    function resetar(){
        setContador(0)
    }

    return (
        <>
            <h1>{contador}</h1>
            <button onClick={aumentar}>➕</button>
            <input type="text" placeholder="digite aqui seu texto" value={texto} onChange={(e)=>setTexto(e.target.value)} />

            <p>Texto digitado: {texto}</p>
            <p>Qtd de caracteres: {texto.length}</p>
        </>
    )
}

