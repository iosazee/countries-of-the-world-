import React from "react";
import axios from "axios";
import Countries from "./Countries";

function Body () {
        const [countries, setCountries] = React.useState([]);
        const [selectedCountry, setSelectedCountry] = React.useState({});
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

        const handleChange =(event) => {
            console.log(event.target.value);
            setSelectedCountry(event.target.value);
        }

    return (
        <div>
            <select onChange={handleChange} name='countries' id="countries-select">
                { countries.map((option, index) => (<option key={index} value={option.name.official}>{option.name.official}</option>)) }
            </select>


            {
                countries.filter((country) => country.name.official === selectedCountry).map((countriesArray) => <Countries key={countriesArray.tld} country ={countriesArray} />)
            }
        </div>
    )
}

export default Body;