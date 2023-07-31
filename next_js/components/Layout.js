import styles from '../styles/Layout.module.css'
import Nav from './nav'
import Header from './Header'
import Meta from './Meta'

const Layout = ({children}) => {
  return (
      <>
        <Nav/>
        <Meta/>
            <div className={styles.container}>
            <main className={styles.main}>
            <Header></Header>
                    {children}

            </main>
                  
            </div>
      </>
  
  )
}

export default Layout
