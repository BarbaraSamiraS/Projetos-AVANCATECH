import Menu from "@/app/Components/Nav"
import Produto from "@/app/Components/Produto"

export default function () {
  return (
    <>
    <h1>Produtos</h1>
    <hr></hr>
    <Produto nome="Notebook" img="https://benchpromos.com.br/_next/image?url=https%3A%2F%2Ft17208.vtexassets.com%2Farquivos%2Fids%2F163535-1200-1200%3Fv%3D638346429562770000%26width%3D1200%26height%3D1200%26aspect%3Dtrue&w=3840&q=75" valor="R$ 3.500,00" qtd="200"></Produto>
    <Produto nome="Celular" img="https://upload.wikimedia.org/wikipedia/commons/5/5f/IPhone_15_pro_max.png" valor="R$ 1.800,00" qtd="2000"></Produto>
    </>
  );
}