import { Container, Grid } from "@material-ui/core";
import CountryCard from "./CountryCard";

const DisplayData = ({ data }) => {
  // console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {Object.keys(data).map((stateName, index) => (
          <Grid item xs={6} md={3} >
            {/* <div>
              <h1>{stateName}</h1>
              <p>{data[stateName]["All"].capital_city}</p>
              <p>{data[stateName]["All"].continent}</p>
              <p>{data[stateName]["All"].abbreviation}</p>
              <p>{data[stateName]["All"].life_expectancy}</p>
              <p>{data[stateName]["All"].population}</p>
              <p>{data[stateName]["All"].sq_km_area}</p>
              <p>{data[stateName]["All"].continent}</p>
            </div> */}
            <CountryCard country={data[stateName]['All']} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DisplayData;

//   for (const key of Object.keys(data)) {
//     console.log(key + ":" + data[key]);
//   }
// abbreviation: "BR";
// capital_city: "Brasília";
// confirmed: 21259122;
// continent: "South America";
// country: "Brazil";
// deaths: 591440;
// elevation_in_meters: 320;
// iso: 76;
// life_expectancy: "62.9";
// location: "South America";
// population: 209288278;
// recovered: 0;
// sq_km_area: 8547403;
