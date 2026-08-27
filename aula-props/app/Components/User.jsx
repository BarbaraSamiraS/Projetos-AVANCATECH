// Criando componente com Props

export default function usuario(props){
    return(
        <div className="border border-gray-30 mb-20">
            <h1>Nome: {props.nome}</h1>
            <h2>Email: {props.email}</h2>
            <p>Contato: {props.contato}</p>
        </div>
    )
}
