import { useState } from "react";

import Header from "./components/Header/Header";
import IpDetails from "./components/IPDetails/IpDetails";
import Map from "./components/Map/Map";

import ContextData from "./utilities/context";

function App() {
  const [ipAddress1, setIpAddress1] = useState("");
  function getSearchInput(ip) {
    console.log(ip);
  }
  return (
    <main className=" ">
      <ContextData>
        <Header />
        <IpDetails />
        <Map />
      </ContextData>
    </main>
  );
}

export default App;
