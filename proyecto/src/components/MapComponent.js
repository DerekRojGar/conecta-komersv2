import React, { useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 120px)' // Ajusta la altura para dejar espacio para un futuro navbar
};

const defaultCenter = {
  lat: 19.041651618263863,
  lng: -98.21484616107442
};

const libraries = ["places"];

function MapComponent() {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    { id: 1, position: { lat: 19.05861048409205, lng: -98.15258763066291 }, title: 'Universidad Tecnológica de Puebla', info: 'Una de las universidades tecnológicas más importantes de la región.', rating: 4.5, hours: '8:00 AM - 5:00 PM', phone: '+52 222 123 4567' },
    { id: 2, position: { lat: 19.000159416402692, lng: -98.22879929377343 }, title: 'Albañil: Carlos Rojas López', info: 'Experto en albañilería con 20 años de experiencia.', rating: 4.0, hours: '9:00 AM - 6:00 PM', phone: '+52 222 987 6543' },
    { id: 3, position: { lat: 19.000220748238153, lng: -98.22719047617132 }, title: 'Mecánico: Rubén Garcia Hernandez', info: 'Mecánico automotriz especializado en motores diésel.', rating: 4.2, hours: '8:00 AM - 7:00 PM', phone: '+52 222 321 6789' },
    { id: 4, position: { lat: 19.05277650520785, lng: -98.21511167163116 }, title: 'Plomero: David Mendoza Cano', info: 'Plomero certificado con 15 años de experiencia.', rating: 4.8, hours: '7:00 AM - 4:00 PM', phone: '+52 222 123 7890' },
    { id: 5, position: { lat: 19.104652349200915, lng: -98.22802680229151 }, title: 'Carpintero: Francisco Javier Ocampo Hernández', info: 'Carpintero artesanal, especializado en muebles a medida.', rating: 4.6, hours: '8:00 AM - 5:00 PM', phone: '+52 222 456 1234' },
    { id: 6, position: { lat: 19.091638742331472, lng: -98.17034885035417 }, title: 'Jardinero: Aaron Adrian Martinez Barrales', info: 'Jardinero experto en paisajismo y diseño de jardines.', rating: 4.3, hours: '6:00 AM - 2:00 PM', phone: '+52 222 789 4561' },
    { id: 7, position: { lat: 19.001027469447255, lng: -98.17199227004092 }, title: 'Servicio Técnico: Ramses Nava Ramirez', info: 'Técnico en reparación de electrodomésticos y equipos electrónicos.', rating: 4.7, hours: '9:00 AM - 6:00 PM', phone: '+52 222 654 9870' },
  ];

  const onLoadMap = (mapInstance) => {
    setMap(mapInstance);
  };

  const onLoadSearchBox = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    const place = places[0];
    if (place) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      setCenter(location);
      map.panTo(location);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        <StandaloneSearchBox
          onLoad={onLoadSearchBox}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Buscar ubicación"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              position: 'absolute',
              top: '10px',
              left: '50%',
              marginLeft: '-120px',
              zIndex: 10 // Asegura que la barra de búsqueda esté encima del mapa
            }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15} // Ajusta el nivel de zoom según sea necesario
          onLoad={onLoadMap}
        >
          {markers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
              onClick={() => {
                console.log('Marker clicked:', marker); // Verifica el marcador clicado
                setSelectedMarker(marker); // Establece el marcador seleccionado
              }}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)} // Cierra la ventana emergente
            >
              <div style={{ color: 'black' }}>
                <h2>{selectedMarker.title}</h2>
                <p>{selectedMarker.info}</p>
                <p><strong>Puntuación:</strong> {selectedMarker.rating} estrellas</p>
                <p><strong>Horario:</strong> {selectedMarker.hours}</p>
                <p><strong>Teléfono:</strong> {selectedMarker.phone}</p>
              </div>
            </InfoWindow>
          )}

          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
    
  );
}


export default MapComponent;
