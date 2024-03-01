import logo from '../../images/mamon-logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={logo} alt="" />
        <span>mamon</span>
      </div>

      <nav>
        <ul>
          <li>Services</li>
          <li>Clients</li>
          <li>Our team</li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
