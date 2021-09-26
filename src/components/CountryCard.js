import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
 

const useStyles = makeStyles({
  contentStyle: {
    textAlign: "center",
  },
  headerStyle: {
    textAlign: "center",
    backgroundColor: "#9e9e9e",
  },

});

const CountryCard = ({ country }) => {
  
  const classes = useStyles();

  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.headerStyle}
        title={`Death From Covid 19: ` + country.deaths}
        subheader={country.country}
      />
      <CardContent className={classes.contentStyle}>
        <Typography variant="body1">
          Life Expectancy is {country.life_expectancy} <br /> <br />
          Confirmed Cases is {country.confirmed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
