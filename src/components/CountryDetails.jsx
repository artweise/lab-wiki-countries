import { useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';

const CountryDetails = ({ country }) => {
  const { countryId } = useParams();
  console.log(useParams);
  console.log('countryId -->', countryId);
  // The useParams hook returns an object of key/value pairs
  // of the dynamic params from the current URL that were matched
  // by the <Route path>.
  // Child routes inherit all params from their parent routes.

  const selectCountry = country.find((countryObj) => {
    return countryObj.alpha3Code === countryId;
  });

  const flagOfCountry = `https://flagpedia.net/data/flags/icon/72x54/${selectCountry.alpha2Code.toLowerCase()}.png`;

  const findBorders = country.filter((land) => {
    return selectCountry.borders.includes(land.alpha3Code);
  });

  return (
    <div className="CountryCard-container d-flex flex-column p-4 align-items-center">
      <img src={flagOfCountry} alt={selectCountry.name.official} width={150} />
      <h1 className="mt-3">{selectCountry.name.official}</h1>
      <div className="d-flex justify-content-between">
        <h5 className="d-inline-flex p-2">Capital</h5>
        <h5 className="d-inline-flex p-2">{selectCountry.capital}</h5>
      </div>
      <div className="d-flex">
        <h5 className="d-inline-flex p-2">Area</h5>
        <h5 className="d-inline-flex p-2">{selectCountry.area} km²</h5>
      </div>
      <div className="d-flex">
        <h5 className="d-inline-flex p-2">Borders</h5>
        <h5 className="p-2">
          {findBorders.map((country) => {
            return (
              <Link
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
                className="country-link"
              >
                <h5 className="fw-lighter">{country.name.official}</h5>
              </Link>
            );
          })}
        </h5>
      </div>
    </div>
  );
};

export default CountryDetails;
