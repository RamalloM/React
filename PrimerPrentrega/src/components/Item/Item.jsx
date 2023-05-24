import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({idItem, nombre, precio, img}) => {
  return (
    <div className="cardProduct">
        <img className="imgProduct" src={img} alt={nombre} />
        <h3> {nombre}</h3>
        <p>{precio}</p>
        <p>ID: {idItem}</p>
        <Link to={`/item/${idItem}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item