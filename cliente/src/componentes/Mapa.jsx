import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';
import { Typography } from '@mui/material';

export default function Mapa() {
  const position = [-12.0464, -77.0428];

  return (
    <div className="map-container">
      <Typography variant="h5" className="typography-title" gutterBottom>
        Ubicacion actual
      </Typography>
      <Typography variant="subtitle1" className="typography-subtitle" gutterBottom>
        Conoce nuestra destileria actual
      </Typography>
      <div className="map-wrapper">
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Lima, Perú
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }