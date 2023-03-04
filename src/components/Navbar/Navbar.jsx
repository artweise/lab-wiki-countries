import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-inner-ctn">
        <NavLink to="/" className="navbar-brand fs-2 fw-light">
          LAB - WikiCountries
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
