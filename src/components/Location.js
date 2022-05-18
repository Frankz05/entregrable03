import { useState, useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";
import LocationInfo from "./LocationInfo";

const Location = () => {
    const [location, setLocation] = useState({});
    const [id, setId] = useState("")

    useEffect(()=>{
        const random = Math.floor(Math.random()*126)+1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    },[])

    const search =()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
            .then(res => setLocation(res.data))
    }


    return ( 
        <div>
            <h1>Rick and Morty Wiki</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Write dimension ID between 1 ~ 126"
                    onChange={e => setId(e.target.value)}
                    value={id}
                />
                <button onClick={search}> Search </button>
                <LocationInfo location={location}/>

                <h2>Residents</h2>
                <ul className="residentList">
                    {
                        location.residents?.map((resident)=>(
                            <ResidentInfo url={resident} key={resident} />
                            ))
                        }
                </ul>
            </div>
        </div>

     );
    }
    
    export default Location;
    // <p> {location.residents}</p>