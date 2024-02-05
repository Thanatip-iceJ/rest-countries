import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

function Map({ position }) {
  return (
    <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}

export default Map;
