

export default function produto(props){
    return(
        <div>
            <h1>Nome: {props.nome}</h1>
            <img src={props.img} alt=""></img>
            <h2>Valor: {props.valor}</h2>
            <p>Quantidade em estoque: {props.qtd}</p>
            <button>➕</button>
            <button>➖</button>
            <hr></hr>
        </div>
    )
}