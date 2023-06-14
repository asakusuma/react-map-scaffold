import { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import API_KEY from './../google-maps-api-key';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 37.3928272,
  lng: -122.0448043
};

const zoomLevel = 9;

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  });

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapElement = isLoaded && <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={zoomLevel}
    onUnmount={onUnmount}
  >
  </GoogleMap>;

  return <div>
    {mapElement}
  </div>
}

export default memo(MapComponent)

