import styles from '../styles/Layout.module.css'
import Nav from './nav'
import Header from './Header'

const Layout = ({children}) => {
  return (
      <>
        <Nav/>
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