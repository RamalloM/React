import CardWidget from '../CartWidget/CartWidget'
import "./NavBar.css"



const NavBar = () => {
  return (
    <header>
<h1>RopaOnline</h1>

<nav>
    <li>Pantalones</li>
    <li>Remeras</li>
    <li>Abrigos</li>
    <li>Accesorios</li>
    <li>SALE</li>
</nav>

<CardWidget />

    </header>
  )
}

export default NavBar