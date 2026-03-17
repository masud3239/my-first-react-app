import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] =useState([]);

    useEffect(() => {
        countriesPromise.then(data => {
            setCountries(data.countries);
        });
    }, [countriesPromise]);

    const handleVisitedCountries = (country) => {
        const exists = visitedCountries.find(c => c.cca3 === country.cca3);
        if (!exists) {
            setVisitedCountries([...visitedCountries, country]);
        }
    }
const handleVisitedFlag = (flag) =>{
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)

}

    return (
        <div>
            <h1>My Visited Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => (
                        <li key={country.cca3}>
                            {country.name.common}
                        </li>
                    ))
                }
            </ol>

            <div className="countries">
                {
                    countries.map(country => (
                        <Country
                            key={country.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                             handleVisitedFlag = { handleVisitedFlag}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;