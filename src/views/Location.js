/** @jsx jsx */
import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { jsx } from "@emotion/core";

const container = {
  margin: "100px",
  height: "400px",
  width: "400px"
};

function Location() {
  const [location, setLocation] = React.useState([0, 0]);

  const [zoom, setZoom] = React.useState(16);

  const [direction, setDirection] = React.useState([
    -12.1201061,
    -77.03784089999999
  ]);

  const mapRef = React.useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(position => {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setLocation]);

  const handleOnZoom = map => {
    setZoom(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <Map
      css={container}
      center={location}
      zoom={zoom}
      ref={mapRef}
      onZoom={handleOnZoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <Popup>
          You are here!
          <span role="img" arial-label="emoji dot position">
            🙂
          </span>
        </Popup>
      </Marker>
      <Marker position={direction}>
        <Popup>
          This is the restaurant location!
          <span role="img" aria-label="emoji dot position">
            🏠
          </span>
        </Popup>
      </Marker>
    </Map>
  );

  return map;
}

export default Location;
