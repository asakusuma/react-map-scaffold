import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
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

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // Do stuff with the map
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)