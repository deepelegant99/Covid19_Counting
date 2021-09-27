import { Link } from "react-router-dom";

const Header = ()=>{
    return (
      <>
        <Link to="/">Main</Link>
        <Link to="/CountryPage">Country</Link>
        <Link to="/ContinentPage">Continent</Link>
        <Link to="/LocationPage">Location</Link>
        <Link to="/GenericCountry">Generic Country</Link>
      </>
    );
}

export default Header;