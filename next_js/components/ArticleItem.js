import Link from 'next/link';
import ArticlesStyles from '../styles/articles.module.css';
const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`} legacyBehavior>
      <a className={ArticlesStyles.card}>
        <h3>{article.title} &rarr;</h3>
        {/* <p>{article.excerpt}</p> */}
      </a>
    </Link>
  )
}

export default ArticleItem
