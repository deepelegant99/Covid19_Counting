import DisplayItem from '../components/DisplayItems';
import axios from "axios";
import { useEffect } from "react";


const ContinentPage = ({data}) => {

    const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases?continent=Europe";

    const testData={};

    useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) =>
          //Do something with the data
          testData
        )
        .catch((error) => console.error(`${error}`));
    }, []);
  


    console.log(testData);

return(
        <DisplayItem data={data} />
        )

}


export default ContinentPage;
