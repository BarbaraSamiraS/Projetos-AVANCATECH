"use client"
import { useState } from "react";

export default function Lista(){
    const nomes = ["Jose", "Kauan", "Maria", "Kleiton"]; useState()

    const numeros = [1, 2, 3, 4, 5]; 
    return(
        <>
            {nomes.map((nome)=>{
                if(nome != "Kauan"){
                    return <p key={nome}>{nome}</p>
                } else {
                    return <p>Voce esta devendo: {nome}</p>
                }
            })}
            <p>teste teste</p>
        </>
    )
}
