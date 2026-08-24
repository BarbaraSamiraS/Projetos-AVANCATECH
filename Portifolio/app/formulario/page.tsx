"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function FormularioProjeto() {
  const [formData, setFormData] = useState({
    nome: "",
    linkGit: "",
    imagem: "",
    descricao: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/Projetos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.erro || "Erro ao cadastrar projeto");
      }

      setMessage("Projeto cadastrado com sucesso!");

      setFormData({
        nome: "",
        linkGit: "",
        imagem: "",
        descricao: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Erro ao cadastrar projeto.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />

      <section className="min-h-screen bg-[#f2f2f2] px-5 py-[60px] text-center">
        <h2 className="mb-10 font-serif text-[28px] text-[#333]">
          Novo Projeto
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[600px] flex-col gap-[15px] rounded-lg bg-white p-[30px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome do projeto"
            value={formData.nome}
            onChange={handleChange}
            className="rounded-md border border-[#ddd] p-3 text-sm outline-none focus:border-[#3bb77e]"
            required
          />

          <input
            type="text"
            name="linkGit"
            placeholder="Link do GitHub"
            value={formData.linkGit}
            onChange={handleChange}
            className="rounded-md border border-[#ddd] p-3 text-sm outline-none focus:border-[#3bb77e]"
            required
          />

          <input
            type="text"
            name="imagem"
            placeholder="URL da imagem"
            value={formData.imagem}
            onChange={handleChange}
            className="rounded-md border border-[#ddd] p-3 text-sm outline-none focus:border-[#3bb77e]"
            required
          />

          <textarea
            name="descricao"
            placeholder="Descrição do projeto..."
            value={formData.descricao}
            onChange={handleChange}
            className="min-h-[120px] resize-none rounded-md border border-[#ddd] p-3 text-sm outline-none focus:border-[#3bb77e]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer rounded-md border-none bg-blue-500 p-3 font-semibold text-white transition duration-200 hover:bg-[#2ea76f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Publicando..." : "Publicar"}
          </button>

          {message && (
            <p className="text-sm text-[#333]">
              {message}
            </p>
          )}
        </form>
      </section>

      <Footer />
    </>
  );
}