import CardWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
 <Link to={"/"}>
        <h1>TuRopaOnline</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to={"/categoria/2"}>Pantalones</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/3"}>Remeras</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/4"}>Abrigos</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/5"}>Accesorios</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/6"}>SALE</NavLink>
          </li>
        </ul>
      </nav>

<CardWidget />

    </header>
  )
}

export default NavBar