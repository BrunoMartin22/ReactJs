import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { lugar } from '../../utils/productsMock'

const ItemDetailContainer = () => {
    const [sitio , setSitio] = useState({})
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(lugar)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) => {
            console.log("Respuesta GetItem: ", res)
            setSitio(res)
        })
    }, [])

    return(
        <>
            <div>Contenedor ITEM</div>
            <ItemDetail data={lugar}/>
        </>
    )
}

export default ItemDetailContainer