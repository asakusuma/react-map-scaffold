import { memo, } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import API_KEY from './../google-maps-api-key';

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 37.3928272,
  lng: -122.0448043
};

const zoomLevel = 9;

function MapComponent() {
  return <div>
    <LoadScript googleMapsApiKey={API_KEY} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
      >
        { /* Add Marker here */ }
      </GoogleMap>
    </LoadScript>
  </div>
}

export default memo(MapComponent)

