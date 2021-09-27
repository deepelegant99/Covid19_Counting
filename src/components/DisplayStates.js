import axios from "axios";
import { useEffect } from "react";

import { Container, Grid } from "@material-ui/core";
import CountryCard from "./CountryCard";
import StateCard from "./StateCard";


const DisplayStates =({data})=>{

    /*const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases";



    useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) =>
          //Do something with the data
          setData(response.data)
        )
        .catch((error) => console.error(`${error}`));
    }, []);
  
    console.log(data[stateName]['ALL']);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {Object.keys(data).map((stateName, index) => (
          <Grid item xs={6} md={3} >
            <CountryCard country={data[stateName]['US']} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );*/

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {Object.keys(data).map((stateName, index) => (
          <Grid item xs={6} md={3} >
            {/*<CountryCard country={data[stateName]['All']} />*/}
            <StateCard country={data['US']['New York']} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayStates;