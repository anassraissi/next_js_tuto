import Head from 'next/head'
import ArticleList from '../components/ArticlesList'

export default function Home({articles}) {
  // console.log(articles)
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Wellcome anass </h1>
      <ArticleList articles={articles}/>
      
{/*    ila bghina n afichiwha hna mobacharatan
            {articles.map((article)=>(
            
              <h3>{article.title}</h3>
            ))} */}
    </div>
) 
}
export const getStaticProps=async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles=await res.json();
  return {
      props:{
            articles
      }
  }
}
