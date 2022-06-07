import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './PlatoDetail.css'
import { Button } from '@mui/material'
import CountPlatos from '../count/CountPlatos';
import { Link } from 'react-router-dom';



const PlatoDetail = ({data}) => {
    const [espacio, setEspacio] = useState('');
    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)

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
                <label>Selecciona el tamaño</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={espacio}
                    placeholder="Selecciona la cantidad"
                    onChange={handleChange}
                    >
                    <MenuItem value={'Chico'}>Chico</MenuItem>
                    <MenuItem value={'Mediano'}>Mediano</MenuItem>
                    <MenuItem value={'Grande'}>Grande</MenuItem>
                    <MenuItem value={'XL'}>XL</MenuItem>

                </Select>
                {!showButton ?
                <CountPlatos
                    actualizarCantidad={setCantidad}
                    setShowButton={setShowButton}
                />
                :
                <Button variant='outlined'><Link to='/Cart'>Terminar mi compra</Link></Button>}
            </div>
        </div>
    )
}

export default PlatoDetail
