import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import lugares from '../../utils/productsMock'

const ItemDetailContainer = () => {
    const [sitio , setSitio] = useState({})
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(lugares)
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
            <ItemDetail data={lugares}/>
        </>
    )
}

export default ItemDetailContainer