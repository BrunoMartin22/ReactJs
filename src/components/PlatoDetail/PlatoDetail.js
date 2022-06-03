import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './PlatoDetail.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


const PlatoDetail = ({data}) => {
    const [espacio, setEspacio] = useState('');

    const handleChange = (event) => {
        setEspacio(event.target.value);
    };
    console.log("Data desde ItemDetail: ", data)
    return (
        <div className='detail-container'>
            <div className="detail-image">
                <img src={`/${data.image}`} alt="imgProduct"/>
            </div>
            <div className="detail-info">
                <div className='detail-title'>
                    <h2>{data.title}</h2>
                    <span>Compras solo se reciben por delivery</span>
                </div>
                <label>Selecciona la cantidad</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={espacio}
                    placeholder="Selecciona la cantidad"
                    onChange={handleChange}
                    >
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'3'}>3</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>

                </Select>
                <Button className='reserva'><Link to={'/Reserva'}>Comprar</Link></Button>
            </div>
        </div>
    )
}

export default PlatoDetail
