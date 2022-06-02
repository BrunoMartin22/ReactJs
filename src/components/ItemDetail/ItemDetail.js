import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './itemDetail.css'

const ItemDetail = ({data}) => {
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
                </div>
                <label>Selecciona la cantidad de personas</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={espacio}
                    placeholder="Selecciona la cantidad de personas"
                    onChange={handleChange}
                    >
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>
                    <MenuItem value={'6'}>6</MenuItem>
                    <MenuItem value={'8'}>8</MenuItem>

                </Select>
            </div>
        </div>
    )
}

export default ItemDetail