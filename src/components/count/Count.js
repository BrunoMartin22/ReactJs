import './Count.css'
import { useState } from 'react';
import { Button } from '@mui/material'


const CountList = () =>{

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
    <h1 className='personas'>Cantidad de personas</h1>
    <div className='count-item'>
        <Button onClick={addCount}>+</Button>   
        <p>{count}</p>
        <Button onClick={removeCount}>-</Button>
        <Button onClick={onAdd} >Reservar</Button>
    </div>
    </>
 )
}

export default CountList;