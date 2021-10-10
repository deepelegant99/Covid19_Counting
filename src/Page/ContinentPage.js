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


  
const asianConfirmed = asianCountries.map(
  (country) => data[country]["All"]["confirmed"]
);

   
    const AsianCountries = Object.keys(data).filter(function(countryName) {

  const Reducer = (accumulator, curr) => accumulator + curr;
  const confirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
  const asianLifeReducer = (accumulator3, curr) => accumulator3 + curr;
  const asianDeathCount = asianDeaths.reduce(Reducer);
  const asianConfirmedCount = asianConfirmed.reduce(confirmedReducer);
//const asianLifeCount =asianLife_expectancy.reduce(asianLifeReducer));

console.log("Deaths: "+asianDeathCount+" "+
            "Confirmed: "+asianConfirmedCount+  
            " Life Expectancy: "+"europeLife_expectancy");

  });


/////////////**************Europe****************************** */
const europeCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "Europe";
})

const europeDeaths = europeCountries.map(
  (country) => data[country]["All"]["deaths"]
);

const europeConfirmed = europeCountries.map(
  (country) => data[country]["All"]["confirmed"]
);

/*const europeLife_expectancy = europeCountries.map(
  (country) => parseFloat(data[country]["All"]["life_expectancy"])
);*/
 


/****************************************** */
const europeList = europeCountries.map((europeCountries) => data[europeCountries]['All'])

let europeLife_expectancy = 0;

const europeResult3 = Object.keys(europeList).map(function(countrylife){

return europeLife_expectancy=europeLife_expectancy+parseFloat(europeList[countrylife]['life_expectancy']);
})
/****************************************** */
  const EuropeCountries = Object.keys(data).filter(function(countryName) {

const europeReducer = (accumulator, curr) => accumulator + curr;
const europeConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const europeLifeReducer = (accumulator3, curr) => accumulator3 + curr;
const europeDeathCount = europeDeaths.reduce(europeReducer);
const europeConfirmedCount = europeConfirmed.reduce(europeConfirmedReducer);
//const europeLifeCount =europeLife_expectancy.reduce(europeLifeReducer));


console.log("Deaths: "+europeDeathCount+" "+
            "Confirmed: "+europeConfirmedCount+  
            " Life Expectancy: "+europeLife_expectancy);

  });



///////////////////************************************* */

/////////////**************North America****************************** */
const naCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "North America";
})

const naDeaths = naCountries.map(
  (country) => data[country]["All"]["deaths"]
);

const naConfirmed = naCountries.map(
  (country) => data[country]["All"]["confirmed"]
);


 
  const NACountries = Object.keys(data).filter(function(countryName) {

const naReducer = (accumulator, curr) => accumulator + curr;
const naConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const naDeathCount = naDeaths.reduce(naReducer);
const naConfirmedCount = naConfirmed.reduce(naConfirmedReducer)
console.log("Deaths: "+naDeathCount+" "+
            "Confirmed: "+naConfirmedCount+  
            " Life Expectancy: "+"naLife_expectancy");

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

const saConfirmed = naCountries.map(
  (country) => data[country]["All"]["confirmed"]
);



 
  const SACountries = Object.keys(data).filter(function(countryName) {

const saReducer = (accumulator, curr) => accumulator + curr;
const saConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const saDeathCount = saDeaths.reduce(saReducer);
const saConfirmedCount = saConfirmed.reduce(saConfirmedReducer)
console.log("Deaths: "+saDeathCount+" "+
            "Confirmed: "+saConfirmedCount+  
            " Life Expectancy: "+"saLife_expectancy");

  });


/**************saLife_expectancy/12 ***************/
///////////////////************************************* */



/////////////**************Australia****************************** */
const oceaniaCountries = Object.keys(data).filter(function(countryName) {

  return data[countryName]["All"]["continent"] === "Oceania";
})

const oceaniaDeaths = oceaniaCountries.map(
  (country) => data[country]["All"]["deaths"]
);

const oceaniaConfirmed = oceaniaCountries.map(
  (country) => data[country]["All"]["confirmed"]
);
 
  const OceaniaCountries = Object.keys(data).filter(function(countryName) {

const reducer = (accumulator, curr) => accumulator + curr;
const oceaniaConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const oceaniaLifeReducer = (accumulator3, curr) => accumulator3 + curr;
const oceaniaDeathCount = oceaniaDeaths.reduce(reducer);
const oceaniaConfirmedCount = oceaniaConfirmed.reduce(reducer);
//const oceaniaLifeCount =oceaniaLife_expectancy.reduce(asianLifeReducer));

console.log("Deaths: "+oceaniaDeathCount+" "+
          "Confirmed: "+oceaniaConfirmedCount+  
          " Life Expectancy: "+"australiaLife_expectancy");

});

/**************saLife_expectancy/12 ***************/
///////////////////************************************* */

    console.log(oceaniaCountries);
    

    
return(
      
      <DisplayItem data={data} />
  
        )

        


}

  /*return <DisplayItem data={data} />;
};*/

export default ContinentPage;
