import React from "react";
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet'
import "../css/styling.css";
import "leaflet/dist/leaflet";

function MapContainer({ center, zoom }) {
  return (
      <div className="map">
        <LeafletMap center={center} zoom={zoom}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          
        </LeafletMap>
      </div>
  );
}
export default MapContainer;