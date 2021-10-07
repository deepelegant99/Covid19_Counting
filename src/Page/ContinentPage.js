import DisplayItem from '../components/DisplayItems';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const ContinentPage = ({data}) => {

   const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=";

   /* useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) =>
          //Do something with the data
          testData
        )
        .catch((error) => console.error(`${error}`));
    }, []);*/
  

    const asianCountries = Object.keys(data).filter(function(countryName) {

        return data[countryName]["All"]["continent"] === "Asia";
      })
  

   /* This Works*/   
   
    const newList = asianCountries.map((asianCountries) => data[asianCountries]['All'])

    console.log(newList[0]['deaths']+newList[1]['deaths']);

    
return(
      
      <DisplayItem data={data} />
  
        )

        


}


export default ContinentPage;
