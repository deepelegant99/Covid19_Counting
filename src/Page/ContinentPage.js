import DisplayItem from "../components/DisplayItems";
import DisplayContinent from "../components/DisplayContinent";
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

const asianDictionary={};
   
    const AsianCountries = Object.keys(data).filter(function(countryName) {

  const Reducer = (accumulator, curr) => accumulator + curr;
  const confirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
  const asianLifeReducer = (accumulator3, curr) => accumulator3 + curr;
  const asianDeathCount = asianDeaths.reduce(Reducer);
  const asianConfirmedCount = asianConfirmed.reduce(confirmedReducer);
//const asianLifeCount =asianLife_expectancy.reduce(asianLifeReducer));

  asianDictionary["continent"]="Asia";
  const key1 = asianDictionary["continent"];
  asianDictionary["deaths"]=asianDeathCount;
  const key2 = asianDictionary["deaths"];
  asianDictionary["confirmed"]=asianConfirmedCount;
  const key3 = asianDictionary["confirmed"];
  
  

  });
  
console.log(asianDictionary);



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

const europeDictionary={};

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

europeDictionary["continent"]="Europe";
  const ekey1 = europeDictionary["continent"];
  europeDictionary["deaths"]=europeDeathCount;
  const ekey2 = europeDictionary["deaths"];
  europeDictionary["confirmed"]=europeConfirmedCount;
  const ekey3 = europeDictionary["confirmed"];
  


  });

  console.log(europeDictionary);


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

const naDictionary={};
 
  const NACountries = Object.keys(data).filter(function(countryName) {

const naReducer = (accumulator, curr) => accumulator + curr;
const naConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const naDeathCount = naDeaths.reduce(naReducer);
const naConfirmedCount = naConfirmed.reduce(naConfirmedReducer)

naDictionary["continent"]="North America";
  const nakey1 = naDictionary["continent"];
  naDictionary["deaths"]=naDeathCount;
  const nakey2 = naDictionary["deaths"];
  naDictionary["confirmed"]=naConfirmedCount;
  const nakey3 = naDictionary["confirmed"];
  

  });

  console.log(naDictionary);


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


const saDictionary={};
 
  const SACountries = Object.keys(data).filter(function(countryName) {

const saReducer = (accumulator, curr) => accumulator + curr;
const saConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const saDeathCount = saDeaths.reduce(saReducer);
const saConfirmedCount = saConfirmed.reduce(saConfirmedReducer)

saDictionary["continent"]="South America";
  const sakey1 = saDictionary["continent"];
  saDictionary["deaths"]=saDeathCount;
  const sakey2 = saDictionary["deaths"];
  saDictionary["confirmed"]=saConfirmedCount;
  const sakey3 = saDictionary["confirmed"];
  

  });


  console.log(saDictionary);


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

const oceaniaDictionary = {};
 
  const OceaniaCountries = Object.keys(data).filter(function(countryName) {

const reducer = (accumulator, curr) => accumulator + curr;
const oceaniaConfirmedReducer = (accumulator2, curr) => accumulator2 + curr; 
const oceaniaLifeReducer = (accumulator3, curr) => accumulator3 + curr;
const oceaniaDeathCount = oceaniaDeaths.reduce(reducer);
const oceaniaConfirmedCount = oceaniaConfirmed.reduce(reducer);
//const oceaniaLifeCount =oceaniaLife_expectancy.reduce(asianLifeReducer));

oceaniaDictionary["continent"]="Oceania";
  const okey1 = oceaniaDictionary["continent"];
  oceaniaDictionary["deaths"]=oceaniaDeathCount;
  const okey2 = oceaniaDictionary["deaths"];
  saDictionary["confirmed"]=oceaniaConfirmedCount;
  const okey3 = oceaniaDictionary["confirmed"];
  


});


console.log(oceaniaDictionary);

/**************saLife_expectancy/12 ***************/
///////////////////************************************* */

//const continentDictionary={};
const continentDictionary=[asianDictionary, europeDictionary, naDictionary,
  saDictionary, oceaniaDictionary];

/*continentDictionary[0]=asianDictionary;
continentDictionary[1]=europeDictionary;
continentDictionary[2]=naDictionary;
continentDictionary[3]=saDictionary;
continentDictionary[4]=oceaniaDictionary;
*/

console.log(continentDictionary);

return(
      
      <DisplayContinent data={continentDictionary} />
  
        )

        


}


export default ContinentPage;
