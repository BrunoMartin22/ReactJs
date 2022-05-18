import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    const productos = [
        {
            title : 'Nuestro Bar',
            image : 'bar.jpg'
        },
        {
            title : '2do Piso',
            image : 'interior 2do piso.jpg'
        },
        {
            title : 'Planta Baja',
            image : 'interior.jpg'
        },
    ]
    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Nuestro Bar"} image={"bar.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Planta Baja"} image={"interior.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"2do piso"}  image={"interior 2do piso.jpg"}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList
