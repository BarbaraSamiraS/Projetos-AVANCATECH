"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import styles from "../styles/news.module.css";

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
};

export default function ListaNoticias() {
  const [noticias, setNoticias] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const res = await fetch("/api/noticias");

        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const data = await res.json();
        setNoticias(data);
      } catch (err) {
        setError("Não foi possível carregar as notícias.");
      } finally {
        setLoading(false);
      }
    }

    fetchNoticias();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Últimas notícias</h2>

      {/* ⏳ LOADING */}
      {loading && (
        <p style={{ color: "#777", marginTop: "20px" }}>
          Carregando notícias...
        </p>
      )}

      {/* ⚠️ ERRO */}
      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>
          {error}
        </p>
      )}

      {/* 📭 LISTA VAZIA */}
      {!loading && !error && noticias.length === 0 && (
        <p style={{ color: "#777", marginTop: "20px" }}>
          Nenhuma notícia cadastrada ainda.
        </p>
      )}

      {/* ✅ LISTA NORMAL */}
      {!loading && !error && noticias.length > 0 && (
        <div className={styles.grid}>
          {noticias.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}