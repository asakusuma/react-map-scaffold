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

### 4. Add Markers when you click the map

Add the following code to `useCallback` `onLoad` callback, where the comment `// Do stuff with the map` is located.

```JavaScript
function addMarker(location, map) {
    new google.maps.Marker({
        position: location,
        label: 'This is a label',
        map: map,
    });
}
google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
});
```

Now click a location on the map.

## Next Steps

* [Continue the NextJS Tutorial](https://nextjs.org/learn/basics/create-nextjs-app/welcome-to-nextjs)
* [Google Maps API Docs](https://developers.google.com/maps/documentation/javascript)
