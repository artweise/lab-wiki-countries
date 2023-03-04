import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesData} />}>
          <Route
            path="/:countryId"
            element={<CountryDetails country={countriesData} />}
          />
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
};
export default App;
