import React from "react";
import "./Map.css";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showDataMap } from "./util";
function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
const Map = ({ countries, caseType, center, zoom }) => {
  return (
    <>
      <LeafletMap>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>
          contributors'
        />
        {showDataMap(countries, caseType)}
      </LeafletMap>
    </>
  );
};

export default Map;
