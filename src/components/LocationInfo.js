const LocationInfo = ({location}) => {
    return ( 
        <div className="locationBox">
            <h2 className="location">{location.name}</h2>
            <div className="locationInfo">
                <p><b>Type: </b>{location.type}</p>
                <p><b>Dimesion: </b>{location.dimension}</p>
                <p><b>Population: </b>{location.residents?.length}</p>
            </div>
        </div>
    );
}
 
export default LocationInfo;