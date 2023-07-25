import Link from "next/link"
import { Router, useRouter } from "next/router"

const index = ({article}) => {
    // const router=useRouter();
    // const {id}=router.query;
  return (
    <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>   
            <Link href="/" legacyBehavior >Go Back</Link>
    </div>
  )
}
export const getServerSideProps=async(context)=>{
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        const article=await res.json()
        return{
            props:{
                article
            }
        }
}
/*
getServerSideProps is a special function that runs on the server-side before the page is rendered.
 It allows you to fetch data and pass it as props to the page component.

    // The 'context' parameter contains information about the current request
    // and the route parameters, such as 'params'

*/

export default index
