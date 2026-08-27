"use client"
import { useState } from "react";

export default function modal(){
    const [modal, setModal] = useState(false);

    function abrir(){
        setModal(true);
    }
    function fechar(){
        setModal(false);
    }

    let conteudo = true;

    if(modal == true){
        conteudo = (
        <div className="bg-gray-100 text-black h-80 w-150 flex flex-col absolute border-gray-300 border-2 border-solid ">
            <p>Abrir Modal</p>
            <div className=" h-10 w-full border-gray-300  border-solid border-t-2"></div>
            <p>Conteudo</p>
            <div className=" h-10 w-full border-gray-300  border-solid border-t-2"></div>
            <button className="bg-blue-500 rounded-lg p-2" onClick={fechar}>FECHAR</button>
        </div>
        )
    } else {
        conteudo = null;
    }

    return(
        <>
            <div className="bg-white h-screen h-60 w-full flex justify-center items-center">
                <button className="bg-blue-500 p-3 rounded-lg" onClick={abrir}>ABRIR!</button>
                {conteudo}
            </div>
            
        </>
    )
}

