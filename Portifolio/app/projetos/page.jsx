"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarProjetos() {
      try {
        const res = await fetch("/api/Projetos");

        if (!res.ok) {
          throw new Error("Erro ao buscar projetos");
        }

        const data = await res.json();

        setProjetos(data);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os projetos.");
      } finally {
        setLoading(false);
      }
    }

    buscarProjetos();
  }, []);

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10 gap-8">
        <h1 className="text-lg font-bold bg-blue-500 text-black border-black border-dashed border-2 p-2 w-60 text-center">
          Meus Projetos
        </h1>

        {loading && (
          <p>Carregando projetos...</p>
        )}

        {erro && (
          <p className="text-red-500">
            {erro}
          </p>
        )}

        {!loading && !erro && projetos.length === 0 && (
          <p>
            Nenhum projeto cadastrado.
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {projetos.map((projeto) => (
            <Card
              key={projeto.id}
              img={projeto.imagem}
              titulo={projeto.nome}
              descricao={projeto.descricao}
              linkGit={projeto.linkGit}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}