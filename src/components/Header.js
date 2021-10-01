import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import { borderRadius } from "@mui/system";

const useStyles = makeStyles({
  Button: {
      width: 100,
      height: 50,
      backgroundColor:"gray",
      borderRadius:2
  },
});


const Header = ()=>{
    return (
      <>
        <Link to="/"><Button>Main</Button></Link>
        <Link to="/CountryPage"><Button>Country</Button></Link>
        <Link to="/ContinentPage"><Button>Continent</Button></Link>
        <Link to="/LocationPage"><Button>Location</Button></Link>
        <Link to="/GenericCountry"><Button>Generic Country</Button></Link>
      </>
    );
}

export default Header;