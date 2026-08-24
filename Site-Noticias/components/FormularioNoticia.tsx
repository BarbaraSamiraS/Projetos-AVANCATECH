"use client";

import { useState } from "react";
import styles from "../styles/form.module.css";

export default function FormularioNoticia() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/noticias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar notícia");
      }

      setMessage("Notícia publicada com sucesso!");

      // limpa o formulário
      setFormData({
        title: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (error) {
      setMessage("Erro ao publicar notícia.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nova notícia</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título da notícia"
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          value={formData.category}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <textarea
          name="description"
          placeholder="Descrição da notícia..."
          value={formData.description}
          onChange={handleChange}
          className={styles.textarea}
          required
        />

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Publicando..." : "Publicar"}
        </button>

        {message && <p className={styles.feedback}>{message}</p>}
      </form>
    </section>
  );
}