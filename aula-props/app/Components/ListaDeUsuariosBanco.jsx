"use client"
import {useEffect, useState } from "react"
export default function ListaDeUsuariosBanco(){
    const [usuarios, setUsuarios] = useState([])
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [foto, setFoto] = useState("")

    async function cadastrarUsuario(evento){
        evento.preventDefault()
        const resposta = await fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify({nome, idade:Number(idade), foto})
        })
        const usuarioCriado = await resposta.json()
        console.log("usuario criado", usuarioCriado)
        setFoto("")
        setIdade("")
        setNome("")
    }

    useEffect(()=>{
        fetch("/api/users")
        .then((resposta)=> resposta.json())
        .then((dadosDoBanco)=>{
            setUsuarios(dadosDoBanco)
        })
    }, [])

    return(
        <div>
            <h1>Lista de Usuários do Banco</h1>
            {usuarios.map((usuario)=>{
                return(
                    <li key={usuario.id}>
                        {usuario.nome} - {usuario.idade} anos
                    </li>
                )
            })}

            <form onSubmit={cadastrarUsuario}>
                <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} placeholder="Nome"></input>
                <input type="number" value={idade} onChange={(e)=>setIdade(e.target.value)} placeholder="Idade"></input>
                <input type="text" value={foto} onChange={(e)=>setFoto(e.target.value)} placeholder="Foto"></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
