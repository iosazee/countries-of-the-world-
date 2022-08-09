function Countries (props) {
    console.log(props)
    return (
        <div>
            <h3>{props.country.name.official}</h3>
        </div>
    ) 
}

export default Countries;