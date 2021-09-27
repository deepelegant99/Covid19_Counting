import DisplayItems from "./components/DisplayItems";
import Fetchdata from "./components/Fetchdata";
import DisplayStates from "./components/DisplayStates";
import { useState } from "react";
import CountryPage from "./Page/CountryPage";
import ContinentPage from "./Page/ContinentPage";
import GenericCountry from "./Page/GenericCountry";
import LocationPage from "./Page/LocationPage";
import MainPage from "./Page/MainPage";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  const [data, setData] = useState({})

  return (
    <>
      <Router>
          <Link to ="/">Main</Link>
          <Link to ="/CountryPage">Country</Link>
          <Link to ="/ContinentPage">Continent</Link>
          <Link to ="/LocationPage">Location</Link>
          <Link to ="/GenericCountry">Generic Country</Link>
        
        <Switch>  
            <Route path="/CountryPage">
                <CountryPage/>
              </Route>  
              <Route path="/ContinentPage">
                <ContinentPage/>
              </Route>  
              <Route path="/LocationPage">
                <LocationPage/>
              </Route>  
              <Route path="/GenericCountry">
                <GenericCountry/>
              </Route>  
              <Route path="/">
                <MainPage/>
              </Route>  
        </Switch>
        </Router>
      <Fetchdata setData={setData} />;
      {/* <DisplayItems data={data} />; */}
      <DisplayStates data={data}/>
    </>
  );
}

export default App;
