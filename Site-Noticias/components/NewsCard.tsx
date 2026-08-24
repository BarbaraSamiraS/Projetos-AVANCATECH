// components/NewsCard.tsx
import styles from "../styles/news.module.css";

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
};

export default function NewsCard({ post }: { post: Post }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
      </div>

      <div className={styles.content}>
        <span className={styles.meta}>
          {post.date} | {post.category}
        </span>

        <h3 className={styles.cardTitle}>{post.title}</h3>

        <p className={styles.description}>{post.description}</p>

        <a href="#" className={styles.link}>
          Leia mais
        </a>
      </div>
    </div>
  );
}