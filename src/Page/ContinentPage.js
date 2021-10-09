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

  const reducer = (accumulator, curr) => accumulator + curr;
  console.log(asianDeaths.reduce(reducer));


  //console.log(newList[0]['deaths']+newList[1]['deaths']);

  let continentResult = 0;

  // const continentDeaths = Object.keys(newList).map(function (countryDeaths) {
  //   return (continentResult =
  //     continentResult + newList[countryDeaths]["deaths"]);
  // });

  // console.log(continentResult);

  return <DisplayItem data={data} />;
};

export default ContinentPage;
