import { useState, useEffect } from 'react';
import CardItem from '../card/Card'
import { Grid } from '@mui/material';

const CardList = ({title, sitio}) => {
    const [lugar, setLugar] = useState()
    const lugares = [
        {
            title : 'Nuestro Bar',
            image : 'bar.jpg',
            id:1
        },
        {
            title : 'Segundo Piso',
            image : 'interior 2do piso.jpg',
            id:2
        },
        {
            title : 'Planta Baja',
            image : 'interior.jpg',
            id:3
        },
    ]
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
                            <CardItem title={title} image={image}/>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default CardList
