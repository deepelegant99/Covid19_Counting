import DisplayItem from '../components/DisplayItems';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const ContinentPage = ({data}) => {

   const baseUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=";

   
    const asianCountries = Object.keys(data).filter(function(countryName) {

        return data[countryName]["All"]["continent"] === "Asia";
      })
  

   /* This Works*/   
   
    const newList = asianCountries.map((asianCountries) => data[asianCountries]['All'])

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

/////////////**************Europe****************************** */
const europeCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "Europe";
})


/* This Works*/   

const newList2 = europeCountries.map((europeCountries) => data[europeCountries]['All'])

let europeDeaths=0;

const europeResult = Object.keys(newList2).map(function(countryDeaths){

return continentResult=continentResult+newList2[countryDeaths]['deaths'];
})

let europeConfirmed=0;

const europeResult2 = Object.keys(newList2).map(function(countryConfirmed){

return europeConfirmed=europeConfirmed+newList2[countryConfirmed]['confirmed'];
})

let europeLife_expectancy = 0;

const europeResult3 = Object.keys(newList2).map(function(countrylife){

return europeLife_expectancy=europeLife_expectancy+parseFloat(newList2[countrylife]['life_expectancy']);
})


///////////////////************************************* */

/////////////**************North America****************************** */
const naCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "North America";
})


/* This Works*/   

const newList3 = naCountries.map((naCountries) => data[naCountries]['All'])

let naDeaths=0;

const naResult = Object.keys(newList3).map(function(countryDeaths){

return naDeaths=naDeaths+newList3[countryDeaths]['deaths'];
})

let naConfirmed=0;

const naResult2 = Object.keys(newList3).map(function(countryConfirmed){

return naConfirmed=naConfirmed+newList3[countryConfirmed]['confirmed'];
})

let naLife_expectancy = 0;

const naResult3 = Object.keys(newList3).map(function(countrylife){

return naLife_expectancy=naLife_expectancy+parseFloat(newList3[countrylife]['life_expectancy']);
})

/**************naLife_expectancy/23 ***************/
///////////////////************************************* */


/////////////**************South America****************************** */
const saCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "South America";
})


/* This Works*/   

const newList4 = saCountries.map((saCountries) => data[saCountries]['All'])

let saDeaths=0;

const saResult = Object.keys(newList4).map(function(countryDeaths){

return saDeaths=saDeaths+newList4[countryDeaths]['deaths'];
})

let saConfirmed=0;

const saResult2 = Object.keys(newList4).map(function(countryConfirmed){

return saConfirmed=saConfirmed+newList4[countryConfirmed]['confirmed'];
})

let saLife_expectancy = 0;

const saResult3 = Object.keys(newList4).map(function(countrylife){

return saLife_expectancy=saLife_expectancy+parseFloat(newList4[countrylife]['life_expectancy']);
})

/**************saLife_expectancy/12 ***************/
///////////////////************************************* */



/////////////**************Australia****************************** */
const australiaCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "Australia";
})


/* This Works*/   

const newList5 = australiaCountries.map((australiaCountries) => data[australiaCountries]['All'])

let australiaDeaths=0;

const australiaResult = Object.keys(newList5).map(function(countryDeaths){

return australiaDeaths=australiaDeaths+newList5[countryDeaths]['deaths'];
})

let australiaConfirmed=0;

const australiaResult2 = Object.keys(newList5).map(function(countryConfirmed){

return australiaConfirmed=australiaConfirmed+newList5[countryConfirmed]['confirmed'];
})

let australiaLife_expectancy = 0;

const australiaResult3 = Object.keys(newList5).map(function(countrylife){

return australiaLife_expectancy=australiaLife_expectancy+parseFloat(newList5[countrylife]['life_expectancy']);
})

/**************saLife_expectancy/12 ***************/
///////////////////************************************* */

    console.log(australiaCountries);
    

    
return(
      
      <DisplayItem data={data} />
  
        )

        


}


export default ContinentPage;
