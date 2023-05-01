import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Icon } from "leaflet";

const marker = new Icon({
  iconUrl: "https://img.icons8.com/?size=512&id=9Deeqjb8MjFH&format=png",
  iconSize: [50, 50],
});

const Map = () => {
  return (
    <section className=" map_sec">
      <div className="map__container  w-full h-[76.2vh]">
        <MapContainer center={[5.6768121, -0.1204112]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[5.6768121, -0.1204112]} icon={marker}>
            <Popup>192.168.256.100</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
