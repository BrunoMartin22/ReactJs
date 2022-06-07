import './Count.css'
import { useState } from 'react';
import { Button } from '@mui/material'


const CountPlatos = ({actualizarCantidad, setShowButton}) =>{

 const [count, setCount] = useState(0)

 const addCount = () =>{
     setCount(count + 1)
     actualizarCantidad(count + 1)
 }
 const removeCount = () =>{
     if(count > 0){
     setCount(count - 1)
     }
 }
 return (
     <>
    <div className='count-item'>
        <label>Selecciona la cantidad</label>
        <Button onClick={addCount}>+</Button>
        <p>{count}</p>
        <Button onClick={removeCount}>-</Button>
        <Button variant='outlined' className='reserva' onClick={() => setShowButton(true)}>Agregar Producto</Button>
    </div>
    </>
 )
}

export default CountPlatos;