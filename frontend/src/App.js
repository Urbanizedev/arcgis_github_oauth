import React from "react";
import Map from "react-map-gl";

const App = () => {
  return (
    <Map
      initialViewState={{
        longitude: -95.37,
        latitude: 29.76,
        zoom: 10
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    />
  );
};

export default App;
