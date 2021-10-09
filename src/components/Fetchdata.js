import axios from "axios";
import { useEffect } from "react";

const Fetchdata = ({setData}) => {
    
  const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) =>
        //Do something with the data
        setData(response.data)
      )
      .catch((error) => console.error(`${error}`));
  }, []);

  return <></>;
};

export default Fetchdata;
