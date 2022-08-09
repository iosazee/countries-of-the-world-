import React from "react";
import axios from "axios";
import Countries from "./Countries";

function Body () {
        const [countries, setCountries] = React.useState([]);

        const fetchCountries = () => {
            axios.get('https://restcountries.com/v3.1/all')
            .then((response) => {
                console.log(response.data)
                setCountries(response.data)
            })
        }

        React.useEffect(() => {
            fetchCountries()
        }, []);


    return (
        <div>
            {
                countries.map((countriesArray) => <Countries key={countriesArray.tld} country ={countriesArray} />)
            }
        </div>
    )
}

export default Body;