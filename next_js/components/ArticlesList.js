import ArticleItem from './ArticleItem'
import articleStyles from '../styles/articles.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
