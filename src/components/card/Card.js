import './Card.css'
import { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material'

const CardItem = ({image, title}) => {
    const [count, setCount] = useState(0)

    const addCount = () =>{
        setCount(count + 1)
    }
    const removeCount = () =>{
        if(count > 0){
        setCount(count - 1)
        }
    }
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container fotos">
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${image}`} alt={"producto"}/>
                    </div>
                    <p>{title}</p>
                    <p></p>
                    <Button variant={'contained'} >Detalles</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;