// components/NewsSection.tsx
import NewsCard from "./NewsCard";
import styles from "../styles/news.module.css";

const posts = [
  {
    id: 1,
    title: "Título da postagem 1",
    description: "Sample small text. Lorem ipsum dolor sit amet.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    date: "Fri Jun 19 2020",
    category: "Category",
  },
  {
    id: 2,
    title: "Título da postagem 2",
    description: "Sample small text. Lorem ipsum dolor sit amet.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    date: "Fri Jun 19 2020",
    category: "Category",
  },
  {
    id: 3,
    title: "Título da postagem 3",
    description: "Sample small text. Lorem ipsum dolor sit amet.",
    image: "https://images.unsplash.com/photo-1786698853398-6db3c7bdc4de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Fri Jun 19 2020",
    category: "Category",
  },
  {
    id: 4,
    title: "Título da postagem 4",
    description: "Sample small text. Lorem ipsum dolor sit amet.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    date: "Fri Jun 19 2020",
    category: "Category",
  },
];

export default function NewsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Últimas notícias</h2>

      <div className={styles.grid}>
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>

      <p className={styles.footer}>
        Imagens de <span>Freepik</span>
      </p>
    </section>
  );
}