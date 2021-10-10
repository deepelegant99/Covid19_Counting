import DisplayItem from "../components/DisplayItems";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ContinentPage = ({ data }) => {
  const asianCountries = Object.keys(data).filter(function (countryName) {
    return data[countryName]["All"]["continent"] === "Asia";
  });

  /* This Works*/

  const asianDeaths = asianCountries.map(
    (country) => data[country]["All"]["deaths"]
  );


   
    const AsianCountries = Object.keys(data).filter(function(countryName) {

  const reducer = (accumulator, curr) => accumulator + curr;
  console.log(asianDeaths.reduce(reducer));

    });
  
    let continentResult=0;

    /*const continentDeaths = Object.keys(newList).map(function(countryDeaths){

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

const europeDeaths = europeCountries.map(
  (country) => data[country]["All"]["deaths"]
);


 
  const EuropeCountries = Object.keys(data).filter(function(countryName) {

const europeReducer = (accumulator, curr) => accumulator + curr;
console.log(europeDeaths.reduce(europeReducer));

  });



///////////////////************************************* */

/////////////**************North America****************************** */
const naCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "North America";
})

const naDeaths = naCountries.map(
  (country) => data[country]["All"]["deaths"]
);


 
  const NACountries = Object.keys(data).filter(function(countryName) {

const naReducer = (accumulator, curr) => accumulator + curr;
console.log(naDeaths.reduce(naReducer));

  });


/**************naLife_expectancy/23 ***************/
///////////////////************************************* */


/////////////**************South America****************************** */
const saCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "South America";
})


const saDeaths = saCountries.map(
  (country) => data[country]["All"]["deaths"]
);


 
  const SACountries = Object.keys(data).filter(function(countryName) {

const saReducer = (accumulator, curr) => accumulator + curr;
console.log(saDeaths.reduce(saReducer));

  });

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

  /*return <DisplayItem data={data} />;
};*/

export default ContinentPage;
