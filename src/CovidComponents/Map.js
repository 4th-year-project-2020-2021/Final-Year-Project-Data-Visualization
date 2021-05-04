/**
 * @author Grace Keane
 * 
 * Covid-19 component for generating the Leaflet interactive map.
 * 
 * Referance Leaflet Map - https://leafletjs.com/
 */
import React from "react";
import "../css/styling.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "../CovidComponents/util";

// Assigning center and zoom of map
function Map({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer
      casesType={casesType}
      className="map"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        // Referance to Leaflet Map
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showDataOnMap(countries, casesType)}
      {/* Loop through countries and draw countries*/}
    </MapContainer>
  );
}

export default Map;