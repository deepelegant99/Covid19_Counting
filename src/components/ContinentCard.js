import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
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

const ContinentCard = ({ continent }) => {
  
  const classes = useStyles();

  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.headerStyle}
        title={`Death From Covid 19: ` + continent.deaths}
        subheader={continent.country}
      />
      <CardContent className={classes.contentStyle}>
        <Typography variant="body1">
          Life Expectancy is {continent.life_expectancy} <br /> <br />
          Confirmed Cases is {continent.confirmed}
        </Typography>
        <Button>States</Button>
      </CardContent>
    </Card>
  );
};

export default ContinentCard;
