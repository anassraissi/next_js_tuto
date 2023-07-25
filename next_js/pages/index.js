import Head from 'next/head'
import ArticleList from '../components/ArticlesList'

export default function Home({articles}) {
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
/**
 * the getStaticProps method. In Next.js,
 *  getStaticProps is a special function used in static site generation (SSG).
 *  It runs at build time and fetches data, which is then passed as props to the page component.
 *  This data will be the same for all users visiting the page, as it's generated during build time.
 */
