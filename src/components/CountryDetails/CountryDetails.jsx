import { useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './style.css';

const CountryDetails = ({ country }) => {
  const { countryId } = useParams();
  console.log(useParams);
  console.log('countryId -->', countryId);
  // The useParams hook returns an object of key/value pairs
  // of the dynamic params from the current URL that were matched
  // by the <Route path>.
  // Child routes inherit all params from their parent routes.

  const selectCountry = country.find((countryObj) => {
    //--> we can put it in useEffect, but them we need a state in this useEffect
    return countryObj.alpha3Code === countryId;
  });

  // then after we need use conditional

  const flagOfCountry = `https://flagpedia.net/data/flags/icon/72x54/${selectCountry.alpha2Code.toLowerCase()}.png`;

  const findBorders = country.filter((land) => {
    return selectCountry.borders.includes(land.alpha3Code);
  });

  return (
    <div className="CountryCard-container d-flex flex-column align-items-center m-5 p-5">
      <img src={flagOfCountry} alt={selectCountry.name.official} width={150} />
      <h1 className="fw-light mt-3">{selectCountry.name.official}</h1>
      <div className="d-flex align-items-start">
        <h5 className="d-inline-flex p-2 fw-light">Capital</h5>
        <h5 className="d-inline-flex p-2 fw-light">{selectCountry.capital}</h5>
      </div>
      <div className="d-flex">
        <h5 className="d-inline-flex p-2 fw-light">Area</h5>
        <h5 className="d-inline-flex p-2 fw-light">{selectCountry.area} km²</h5>
      </div>
      <div className="borders-ctn d-flex">
        <h5 className="d-inline-flex p-2 fw-light">Borders</h5>
        <h5 className="p-2">
          {findBorders.map((country) => {
            return (
              <Link
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
                className="country-link"
              >
                <h5 className="fw-light">{country.name.official}</h5>
              </Link>
            );
          })}
        </h5>
      </div>
    </div>
  );
};

export default CountryDetails;
