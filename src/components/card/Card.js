import './Card.css'
import CountList from '../count/Count';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const CardItem = ({image, title, id}) => {
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container fotos">
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <CountList/>
                    <Button className='boton-detalle' variant={'contained'} >
                        <Link to={`/Lugar/${id}`}>Ver Detalle</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;