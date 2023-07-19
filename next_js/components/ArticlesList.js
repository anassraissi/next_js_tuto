import ArticleStyle from '../styles/articles.module.css'
const ArticlesList = ({articles}) => {
  return (
    <div className={ArticleStyle.grid}>
                {articles.map((article)=>(
            
                 <h3>{article.title}</h3>

                 ))}
    </div>
  )
}

export default ArticlesList
