import { useState, useEffect } from 'react';
import CartaItem from '../Carta/CartaPlatos'
import { Grid } from '@mui/material';
import {Comida} from '../../utils/productsMock';

const CartList = ({title}) => {
    const [comida, setComida] = useState()
    const getComida = () =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(Comida)
            },2000)
        })
    }

    useEffect(() =>{
            getComida()
            .then( (response)=> {
                setComida(response)
            })
        .catch( (err) => {
            console.log(err);
        })
        .finally( () =>{
            console.log("temino la promesa");
        })
    },[])

    return(
        <>
        <h2>{title}</h2>
            {
                Comida.map( ({title, image, id, price, cantidad}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <CartaItem title={title} image={image} price={price} cantidad={cantidad} id={id}/>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default CartList