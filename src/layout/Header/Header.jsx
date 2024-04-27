import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../rtk/themeSlice'
import logo from '../../images/mamon-logo.svg'
import styles from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const { theme }= useSelector(state => state.theme)
  console.log(theme)
  return (
    <header className={theme === 'light' ? styles.lightTheme : styles.darkteheme}>
      <div>
        <img src={logo} alt="" />
        <span>mamon</span>
        <button onClick={() => dispatch(toggleTheme())}>CLICK</button>
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
