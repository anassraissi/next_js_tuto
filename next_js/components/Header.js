import headerStyle from '../styles/header.module.css'
const Header = () => {
  return (
    <div>

            <h1 className={headerStyle.title}>
                <span>Web Dev</span> News
            </h1>
            <p className={headerStyle.description}> 
                keep up to date with the lastest web dev news
            </p>
  
    </div>
  )
}

export default Header
