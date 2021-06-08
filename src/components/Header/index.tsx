import { Link } from 'react-router-dom'
import './style.css'

const Header = ()=> {
  return (
    <nav className='nav-header'>
      <div>
        <Link className='home-link' to='/'>Where in The World !</Link>
      </div>
       <div>
         2021
       </div>
    </nav>
  )
}

export default Header
