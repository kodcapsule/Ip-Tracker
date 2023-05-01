import { useState } from "react";

import Header from "./components/Header/Header";
import IpDetails from "./components/IPDetails/IpDetails";
import Map from "./components/Map/Map";

function App() {
  const [ipAddress1, setIpAddress1] = useState("");
  function getSearchInput(ip) {
    console.log(ip);
  }
  return (
    <main className=" ">
      <Header />
      <IpDetails />
      <Map />
    </main>
  );
}

export default App;
