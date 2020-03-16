import React from 'react'
import {useParams, useNavigate, Outlet} from 'react-router-dom'

export default function Profile(){
    const {id} = useParams();
    const navigate = useNavigate()



    return(
    <b>Profile: {id}
    <button onClick={() => navigate("/")} value="Testar">Testar</button>
    <Outlet/>
    </b>
    )
}