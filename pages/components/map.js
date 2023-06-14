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
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const onClickMap = (event) => {
    const location = event.latLng.toJSON();
    setLocation(location);
  }

  return <div>
    <LoadScript googleMapsApiKey={API_KEY} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
        onClick={onClickMap}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  </div>
}

export default memo(MapComponent)

