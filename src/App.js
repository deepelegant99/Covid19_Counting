import DisplayItems from "./components/DisplayItems";
import Fetchdata from "./components/Fetchdata";
import { useState } from "react";


function App() {
  const [data, setData] = useState({})

  return (
    <>
      <Fetchdata setData={setData} />;
      {/* <DisplayItems data={data} />; */}
      
    </>
  );
}

export default App;
