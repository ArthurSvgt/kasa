import logo from '../../assets/house.jpg'
import './header.css'

function Header() {
  return <header className='header'><h1 className='h1-name'>K<img src={logo} alt="a" />sa</h1>
  <nav>
    <ul className='nav'>
      <li><a href="#" className='nav-item'>Accueil</a></li>
      <li><a href="#" className='nav-item'>A propos</a></li>
    </ul>
  </nav>
</header>

}

export default Header