import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default Leaflet marker icons (common issue in React bundlers)
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const location_coordinates = {
    lat: -25.671927,
    lng: 28.179294
}

export default function Map() {
  return (<>
    <MapContainer
      center={[location_coordinates.lat, location_coordinates.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
        <div>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location_coordinates.lat},${location_coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Get location on google maps
            </a>
        </div>
    </>
  );
}
