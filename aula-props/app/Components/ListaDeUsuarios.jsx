"use client"

export default function ListaDeUsuarios(){
    let usuario = {
        nome: "Pedro",
        idade: 25,
        email: "pedro@gmail.com",
        ativo: true
    }

    const usuarios = [
        {
            nome: "Pedro",
            idade: 25,
            email: "pedro@gmail.com",
            status: true
        },
        {
            nome: "Maira",
            idade: 35,
            email: "maira@gmail.com",
            status: true
        },
        {
            nome: "Joao",
            idade: 40,
            email: "joao@gmail.com",
            status: false
        }
    ]

    return(
        <>
            <h1>Lista de usuarios que estão ativos</h1>

            {
                usuarios.map((usuario)=>{
                    if(usuario.status == true){
                        return(
                            <div key={usuario.email} className="bg-gray-700 w-50 h-35">
                                <h1> Nome: {usuario.nome}     </h1>
                                <h2> email: {usuario.email}   </h2>
                                <p>  idade: {usuario.idade}   </p>
                                <p>  Status: ATIVO </p>
                            </div>
                        )
                    }
                        
                })
            }
        </>
    )
}