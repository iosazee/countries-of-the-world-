import './Countries.css';

function Countries (props) {
    console.log(props)
    return (
        <div>
            <h3>Official Name: {props.country.name.official}</h3>
            <p>Capital City: {props.country.capital}</p>
            <p>Region: {props.country.region}</p>
            <p>Latititude & Longitude: {props.country.latlng}</p>
            <p>Landlocked: { String(props.country.landlocked) }</p>
            <p>Flag: <img src={props.country.flags.png} alt="flag" className="flag"/></p>
            <p>Coat of Arms: <img src={props.country.coatOfArms.png} alt="coat of Arms" className="coat_of_arms"/></p>
            {
                Object.keys(props.country.currencies)
                .map((currencyKey) => <p key={props.country.tld}>Currency: {props.country.currencies[currencyKey].name}</p>)
              
            }
            <p>Population: {props.country.population}</p>
           
        </div>
    ) 
}

export default Countries;