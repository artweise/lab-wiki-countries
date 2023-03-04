import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

import CountryDetails from '../CountryDetails/CountryDetails';
import countriesData from '../../countries.json';

const CountriesList = ({ countries }) => {
  // we can map() using props

  return (
    <div className="country-list-ctn d-flex justify-content-start">
      <div className="one-country-ctn border border-secondary">
        <h2 className="fs-2 fw-light my-3">Countries List</h2>
        {countries.map((country) => {
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
