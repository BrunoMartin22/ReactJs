import './Card.css'
import CountList from '../count/Count';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material'

const CardItem = ({image, title}) => {
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container fotos">
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <CountList/>
                    <Button variant={'contained'} >Detalles</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;