import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

// import CountryDetails from '../CountryDetails/CountryDetails';
// import countriesData from '../../countries.json';

const CountriesList = ({ countries }) => {
  const [countriesFromApi, setCountriesFromApi] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountriesFromApi(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 1. to fetch data we need useState und useEffect
  // 2. create a state, initial value =[empty array]
  // 3. useEffect hook we can use to make a GET request
  // 4. invoke useEffect within the component, a hook takes in a function as argument
  // 5. within a function we make a GET request using a build in fetchApi
  // 6. as a parameter (argument) we pass in a API endpoint
  // 7. fetch API returns a promise which we need to resolve
  // 8. useEffect runs every time when the component renders,
  // but we want that it will run only once, when the component first renders
  // to do that we pass the empty array, as a second argument the useEffect
  // array is a list of dependencies, on which this effect depends on
  // since we want that API call to happend only once, it has no dependencies

  // we can map() using props

  return (
    <div className="country-list-ctn d-flex justify-content-start">
      <div className="one-country-ctn border border-secondary">
        <h2 className="fs-2 fw-light my-3">Countries List</h2>
        {countriesFromApi.map((country) => {
          const flagOfCountry = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;
          return (
            <Link
              key={country.alpha3Code}
              to={`/${country.alpha3Code}`}
              className="country-link"
            >
              <img
                src={flagOfCountry}
                className="my-3"
                width={100}
                alt={country.name.official}
              />
              <h3 className="fs-2 fw-light">{country.name.official}</h3>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default CountriesList;
