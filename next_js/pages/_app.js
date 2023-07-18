import styles from '../styles/Layout.module.css'
import Layout from '../components/Layout'
import Nav from '../components/nav'

export default function App({ Component, pageProps }) {
  return (
     <Layout>
      <Component {...pageProps} ></Component>
    </Layout>
    

  )
}
