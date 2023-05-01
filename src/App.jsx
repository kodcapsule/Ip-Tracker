import Header from "./components/Header/Header";
import IpDetails from "./components/IPDetails/IpDetails";
import Map from "./components/Map/Map";

function getSearchInput() {
  console.log("search");
}

function App() {
  return (
    <main className=" ">
      <Header getSearchInput={getSearchInput} />
      <IpDetails />
      <Map />
    </main>
  );
}

export default App;
