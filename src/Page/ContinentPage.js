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

    //console.log(newList[0]['deaths']+newList[1]['deaths']);

    let continentResult=0;

    const continentDeaths = Object.keys(newList).map(function(countryDeaths){

      return continentResult=continentResult+newList[countryDeaths]['deaths'];
    })

    let asiaConfirmed=0;

    const asiaResult2 = Object.keys(newList).map(function(countryConfirmed){

      return asiaConfirmed=asiaConfirmed+newList[countryConfirmed]['confirmed'];
    })

    let asiaLife_expectancy = 0;

    const asiaResult3 = Object.keys(newList).map(function(countrylife){

      return asiaLife_expectancy=asiaLife_expectancy+parseFloat(newList[countrylife]['life_expectancy']);
    })




    console.log(asiaLife_expectancy/41);
    

    
return(
      
      <DisplayItem data={data} />
  
        )

        


}


export default ContinentPage;
