import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, }) => {
    const [visited, setVisited] = useState(false);
    console.log(handleVisitedCountries);
    // console.log(country.area.area);
    // console.log(country.population.population);
    const handleVisited = () => {
        // Basic system
        // if(visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }
        // Second system
        //   setVisited(visited? false: true); 
        // Third system  
        setVisited(!visited)
        handleVisitedCountries(country);  
    }
    return (
        // <div className={`country border-lg text-center ${visited? "country-visited": "country-not visited"}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
            <button>Add Visited Flag</button>
        </div>
    );
};

export default Country;