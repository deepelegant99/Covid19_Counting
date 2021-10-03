import DisplayItem from '../components/DisplayItems';
import axios from "axios";
import { useEffect } from "react";


const ContinentPage = ({data}) => {

    const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases?continent=Europe";

    /*const testData={};

    useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) =>
          //Do something with the data
          testData
        )
        .catch((error) => console.error(`${error}`));
    }, []);*/
  


    //console.log(data['North America']);

    //const result = Object.keys(data).filter(country => country['All']['continent'] === 'Asia');
    
    const result = Object.keys(data).filter(function(countryName) {

        return data[countryName]["All"]["continent"] === "Asia";
    })
  
    console.log(result);

return(
        <DisplayItem data={data} />
        )





}


export default ContinentPage;
