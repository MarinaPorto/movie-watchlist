
import styles from './header.module.css'
import logo from './images/logo.png';

export function Header() {
  return (
    <header className={styles.header__logo}>
      <img className={styles.logo__img} src={logo} alt="logo"></img>
      <div className=""><span>Movie</span> <br></br> Watchlist</div>
    </header>
  )
}

export default Header;