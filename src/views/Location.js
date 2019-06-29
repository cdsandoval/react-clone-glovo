/** @jsx jsx */
import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import { useLocationRestaurant } from "../selector";
import { useSelectRestaurant } from "../action-hook";

// import MarkerRestaurant from "../components/markerRestaurant";

const container = {
  height: "80vh"
};

// const markerPeople = new L.Icon({
//   iconUrl: require("../assets/marker-people.png"),
//   iconRetinaUrl: require("../assets/marker-people.png"),
//   iconAnchor:[5, 55],
//   popupAnchor: [10, -44],
//   iconSize: [40, 40]
// });

function Ubication({ id = 1 }) {
  const [position, setPosition] = React.useState([-12.1402803, -76.9881638]);
  const [zoomState, setZoomState] = React.useState(16);

  const locationRestaurant = useLocationRestaurant();

  const mapRef = React.useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  // const user = useUser();
  // if (!user) return <Redirect to="login" noThrow />;

  const handleOnZoom = map => {
    setZoomState(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <Map
      css={container}
      center={position}
      zoom={zoomState}
      ref={mapRef}
      onzoomend={handleOnZoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          You are here!
          <span role="img" aria-label="emoji dot position">
            👨‍🎤
          </span>
        </Popup>
      </Marker>
      <Marker position={[-12.1402803, -76.9881638]}>
        <Popup>
          You are here!
          <span role="img" aria-label="emoji dot position">
            👨‍🎤
          </span>
        </Popup>
      </Marker>
      {/* <MarkerRestaurant id={id} /> */}
    </Map>
  );

  return map;
}

export default Ubication;
