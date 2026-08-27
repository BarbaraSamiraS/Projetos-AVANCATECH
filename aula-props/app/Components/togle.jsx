"use client"
import { useState } from "react";

export default function togle(){
    // Crie um state de nome modal.
    const [modal, setModal] = useState('');

    function apareceAi(){
        setModal(true);
    }

    let conteudo = null;
    if(modal == true){
        conteudo = (
        <div className="bg-rose-800 h-60">
            <p>Eba o modal abriu</p>
        </div>
    )
    } else{
        conteudo = null;
    }

    return(
        <>
            <div className="p-6 rounded-lg bg-gray-900 h-100 w-200">
                <h1>Seja bem vindo ao modal que aparece e desaparece</h1>
                <button onClick={apareceAi}>✔️</button>
            </div>
            {conteudo}
        </>
    )
}
