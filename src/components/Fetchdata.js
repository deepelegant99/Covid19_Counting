import axios from "axios";
import { useEffect } from "react";

const Fetchdata = () => {
    
  const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=US";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) =>
        //Do something with the data
        console.log(response.data)
      )
      .catch((error) => console.error(`${error}`));
  }, []);

  return <h1>testing fetch data</h1>;
};

export default Fetchdata;
