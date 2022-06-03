import { useEffect, useState} from "react"
import {Comida} from '../../utils/productsMock'
import { useParams } from "react-router-dom"
import PlatoDetail from "../PlatoDetail/PlatoDetail"

const DetallesPlatos = () => {
    const {id} = useParams()
    const [plato , setPlato] = useState({})
    
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(lugares)
    //         }, 2000)
    //     })
    // }

    useEffect(() => {
      setPlato(ComidaFilter)
    }, [])

    const ComidaFilter = Comida.find((plato) =>{
        return plato.id == id
    })

    return(
        <>
            <PlatoDetail data={plato}/>
        </>
    )
}

export default DetallesPlatos