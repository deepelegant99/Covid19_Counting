import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { borderRadius } from "@mui/system";

const useStyles = makeStyles({
  Button: {
    width: 100,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 2,
  },
  Link:{
    textDecoration: "none",
  }

});

const Header = () => {
  return (
    <div className="Header">
      <div className="Title">
        <h1>Covid 19 Stat Project</h1>
      </div>
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/CountryPage">
            Country
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/ContinentPage">
            Continent
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
