import { useState, useEffect } from 'react';
import CardItem from '../card/Card'
import { Grid } from '@mui/material';
import lugares from '../../utils/productsMock';

const CardList = ({title, sitio}) => {
    const [lugar, setLugar] = useState()
    const getLugar = () =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(lugares)
            },2000)
        })
    }

    useEffect(() =>{
            getLugar()
            .then( (response)=> {
                setLugar(response)
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
                lugares.map( ({title, image, id}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem title={title} image={image} id={id}/>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default CardList
