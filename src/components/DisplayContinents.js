import { Container, Grid } from "@material-ui/core";
import ContinentCard from "./ContinentCard";

const DisplayContinents = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {Object.keys(data).map((stateName, index) => (
          <Grid item xs={6} md={3}>
            {/* <CountryCard country={data[stateName]["All"]} /> */}
            <ContinentCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DisplayContinents;
