import DisplayData from "./components/DisplayData";
import Fetchdata from "./components/Fetchdata";
import { useState } from "react";


function App() {
  const [data, setData] = useState({})

  return (
    <>
      <Fetchdata setData={setData} />;
      <DisplayData data={data} />;
    </>
  );
}

export default App;
