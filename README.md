# React + Google Maps Coding Exercise

## Install

1. `npm install`
2. Rename `pages/_google-maps-api-key.js` to `pages/google-maps-api-key.js` and insert your Google API Key or ask Asa for one.
3. `npm run dev`

## Exercises

### 1. Make the map bigger

1. Open up `pages/components/maps.js`
2. Find the map dimensions variable and increase the size.

```JavaScript
const containerStyle = {
  width: '400px',
  height: '400px'
};
```

### 2. Choose a different map center point

Find the map center variable and change the coordinates.

### 3. Choose a different map zoom level

Find the map zoom variable and change the coordinates.

### 4. Add a marker when you click the map

Add the following code at the top of the `MapComponent` function.

```JavaScript
const [location, setLocation] = useState({
  lat: 0,
  lng: 0,
});

const onClickMap = (event) => {
  const location = event.latLng.toJSON();
  setLocation(location);
}
```

Then add the following code inside the `<GoogleMap>` component:
```JSX
<Marker position={location} />
```

Now click a location on the map.

### 5. Keep a running list of markers and locations

Replace the code you just added with:

```JSX
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
```

Now use the `markers` and `rows` variables to actually render the information.

## Next Steps

* [Continue the NextJS Tutorial](https://nextjs.org/learn/basics/create-nextjs-app/welcome-to-nextjs)
* [Google Maps API Docs](https://developers.google.com/maps/documentation/javascript)
