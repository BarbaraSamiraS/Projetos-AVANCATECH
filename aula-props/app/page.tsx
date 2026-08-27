"use client"; 
import {useState} from 'react'
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("")

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    try {
      const resposta = await fetch("/api/login",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({email,senha})
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.mensagem || "Email ou senha incorretos");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setErro("Nao foi possivel realizar o login");
    }
  }

  return (
    <>
    <div className="flex flex-col justify-center bg-blue-800">
      <form className="bg-white-100 p-8 rouded-x1" onSubmit={handleSubmit}>
        <h1>Entrar no sistema</h1>
        <input type="text" placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <p role="alert">{erro}</p>}
        <button>Entrar</button>
      </form>
    </div>
    </>
  );
}
