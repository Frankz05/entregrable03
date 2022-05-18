import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ResidentInfo = ({url}) => {
    const [resident, setResident] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(res => setResident(res.data))
    },[])


    return ( 
        <li className="card">
            <div>
                <img className="imgCard" src={resident.image} alt="" />
            </div>
            <div>
                <h3>{resident.name}</h3>
                <p>{resident.status} - {resident.species}</p>
                <p className="grayColor">Origin</p>
                <p>{resident.origin?.name}</p>
                <p className="grayColor">Episodes where appear</p>
                <p>{resident.episode?.length}</p>
            </div>
        </li>
     );
}
 
export default ResidentInfo;