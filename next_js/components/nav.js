import Link from "next/link"
import navStyle from '../styles/nav.module.css'
const nav = () => {
  return (
        <nav className={navStyle.nav}>
        <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        </ul>

        </nav>
  )
}

export default nav
