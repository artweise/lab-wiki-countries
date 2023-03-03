import { useState, useEffect } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
// import countriesData from './countries.json';

const CountryDetails = ({ country }) => {
console.log(country);

const [oneCountry, setOneCountry] = useState('')

const { countryId } = useParams();

useEffect(()=>{
  const foundCountry = country.find((oneCountry) => {   
    return oneCountry.alpha3Code === countryId;
  })
  console.log(countryId)
setOneCountry(foundCountry);

}, [countryId])

// const foundCountry = country.find((oneCountry) => {   
//   return oneCountry.alpha3Code === countryId;
// });

// console.log(countryId)
// setOneCountry(foundCountry);

  return <div className="CountryCard">


  <h2> {oneCountry.name.official}</h2>

  
  


    </div>;
};

export default CountryDetails;
