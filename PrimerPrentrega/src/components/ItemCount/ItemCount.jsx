import React from 'react'
import "./ItemCount.css"
// 1) Hook, funcion de react que ayuda a modificar el estado.
import { useState } from 'react'


const ItemCount = () => {
    //El hook se invoca en la parte superior del componente.
    const [counter, setCounter] = useState(1);
    //Entre los () se coloca el valor inicial del estado
    //2) useState me retorna un array de dos elementos, el primero es el estado y el segundo la funcion que actualiza el cambio.

    //Funciones para los eventos:
    const maxStock = 10;

    const incrementar = () => {
        if (counter < maxStock){
            setCounter(counter +1);
        }
    }

    const decrementar = () => {
        if(counter > 1){
        setCounter(counter -1)};
}

    return (
    <div className="counter">
        <button onClick={decrementar}> - </button>
        <p ><strong> {counter} </strong></p>
        <button onClick={incrementar}> + </button>
               
    </div>
  )
}

export default ItemCount