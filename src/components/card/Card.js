import './Card.css'
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const CardItem = ({image, title, id, price}) => {
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container fotos">
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p className='title-lugares'>{title}</p>
                    <div>
                        <Button className='boton-detalle' variant={'contained'} >
                            <Link to={`/Lugar/${id}`}>Ver Detalle</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;