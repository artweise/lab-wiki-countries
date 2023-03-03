import { useState } from 'react';
import { Link } from 'react-router-dom';

import CountryDetails from '../CountryDetails';
import countriesData from '../../countries.json';

const CountriesList = ({ countries }) => {
  // const [countries, setCountries] = useState(countriesData);
  return (
    <div className="country-list-ctn">
      <h2 className="fs-2 fw-lighter">Countries List</h2>
      <div className="one-country-ctn">
        {countries.map((country) => {
          // return <CountryDetails key={country.alpha3Code} country={country} />
          return (
            <Link
              key={country.alpha3Code}
              to={`/country/${country.alpha3Code}`}
              className="country-link"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
              />
              <h3 className="fs-2 fw-lighter">{country.name.official}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
