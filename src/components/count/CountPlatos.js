import './Count.css'
import { useState } from 'react';
import { Button } from '@mui/material'


const CountPlatos = () =>{

 const [count, setCount] = useState(0)

 const addCount = () =>{
     setCount(count + 1)
 }
 const removeCount = () =>{
     if(count > 0){
     setCount(count - 1)
     }
 }
 const onAdd = () =>{
     console.log(count)
 }
 return (
     <>
    <div className='count-item'>
        <Button onClick={removeCount}>-</Button>
        <p>{count}</p>
        <Button onClick={addCount}>+</Button>
        <Button onClick={onAdd} >Añadir al Carrito</Button>
    </div>
    </>
 )
}

export default CountPlatos;