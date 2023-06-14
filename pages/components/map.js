import { memo, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import API_KEY from './../google-maps-api-key';

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 37.3310979,
  lng: -121.8872373
};

const zoomLevel = 12;

function MapComponent() {
  const [locations, setLocations] = useState([]);

  const rows = locations.map((location) => {
    return <li key={`${location.lat},${location.lng}`}>
      {location.lat}, {location.lng}
    </li>;
  });
  const markers = locations.map((location) => {
    const key = `${location.lat}, ${location.lng}`;
    return <Marker key={key} position={location} />;
  });

  const onClickMap = (event) => {
    const location = event.latLng.toJSON();
    setLocations(locations.concat([location]));
  }

  return <div>
    <LoadScript googleMapsApiKey={API_KEY} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
        onClick={onClickMap}
      >
        {markers}
      </GoogleMap>
    </LoadScript>
    <ul>{rows}</ul>
  </div>
}

export default memo(MapComponent)

