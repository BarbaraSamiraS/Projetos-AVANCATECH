"use client";

import { useState } from "react";

export default function ClientForm({ booking }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/registro", {
      method: "POST",
      body: JSON.stringify({
        nome,
        telefone,
        email,
        ...booking,
      }),
    });

    const data = await response.json();
    alert("Agendamento realizado!");
    console.log(data);
  };

  return (
    <div>
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleSubmit}>
        Confirmar
      </button>
    </div>
  );
}