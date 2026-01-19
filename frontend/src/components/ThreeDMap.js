import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ThreeDMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    // Fetch the GeoJSON data from the public folder
    fetch('/nepal-constituencies.json')
      .then(res => res.json())
      .then(data => setGeoData(data));
  }, []);
  
  const mapStyle = { height: '100%', width: '100%', backgroundColor: 'var(--dark-bg)' };

  const onEachFeature = (feature, layer) => {
    // This function runs for each constituency feature
    if (feature.properties && feature.properties.name) {
      // Add a popup to show the constituency name on click
      layer.bindPopup(feature.properties.name);
    }
    
    // Add mouse events for hover effect
    layer.on({
      mouseover: (e) => {
        const l = e.target;
        l.setStyle({
          weight: 3,
          color: 'var(--primary)',
          fillOpacity: 0.7
        });
      },
      mouseout: (e) => {
        // 'e.target' is the GeoJSON layer
        e.target.setStyle(geoJsonStyle);
      },
      click: (e) => {
        // You can add logic here for when a constituency is clicked
        console.log(`Clicked on: ${feature.properties.name}`);
      }
    });
  };
  
  const geoJsonStyle = {
    fillColor: 'var(--secondary)',
    weight: 2,
    opacity: 1,
    color: 'var(--accent)',
    fillOpacity: 0.4
  };

  return (
    <MapContainer center={[27.7172, 85.3240]} zoom={11} style={mapStyle}>
      {/* Use a dark tile layer for the base map */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      {/* Render constituencies if data is loaded */}
      {geoData && (
        <GeoJSON 
          data={geoData} 
          style={geoJsonStyle}
          onEachFeature={onEachFeature} 
        />
      )}
    </MapContainer>
  );
};

export default ThreeDMap;
